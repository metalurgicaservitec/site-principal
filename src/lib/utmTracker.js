// Sistema de rastreabilidade por UTM
class UTMTracker {
  constructor() {
    this.utmParams = this.getUTMParams();
    this.sessionData = this.getSessionData();
    this.trackPageView();
  }

  // Extrai parâmetros UTM da URL
  getUTMParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmParams = {};
    
    const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'];
    
    utmKeys.forEach(key => {
      const value = urlParams.get(key);
      if (value) {
        utmParams[key] = value;
      }
    });

    return utmParams;
  }

  // Obtém dados da sessão
  getSessionData() {
    return {
      timestamp: new Date().toISOString(),
      userAgent: navigator.userAgent,
      referrer: document.referrer,
      screenResolution: `${window.screen.width}x${window.screen.height}`,
      language: navigator.language,
      timezone: Intl.DateTimeFormat().resolvedOptions().timeZone
    };
  }

  // Rastreia visualização da página
  trackPageView() {
    const pageData = {
      page: window.location.pathname,
      title: document.title,
      utm: this.utmParams,
      session: this.sessionData,
      timestamp: new Date().toISOString()
    };

    // Salva no localStorage para persistência
    this.saveToLocalStorage('page_view', pageData);
    
    // Envia para sistema de tracking personalizado
    this.sendToCustomTracking(pageData);
  }

  // Rastreia eventos específicos
  trackEvent(eventName, eventData = {}) {
    const event = {
      event: eventName,
      page: window.location.pathname,
      utm: this.utmParams,
      session: this.sessionData,
      data: eventData,
      timestamp: new Date().toISOString()
    };

    this.saveToLocalStorage('event', event);
    this.sendToCustomTracking(event);
  }

  // Rastreia conversões
  trackConversion(conversionType, value = null) {
    const conversion = {
      type: conversionType,
      value: value,
      page: window.location.pathname,
      utm: this.utmParams,
      session: this.sessionData,
      timestamp: new Date().toISOString()
    };

    this.saveToLocalStorage('conversion', conversion);
    this.sendToCustomTracking(conversion);
  }

  // Salva dados no localStorage
  saveToLocalStorage(type, data) {
    try {
      const key = `servitec_${type}_${Date.now()}`;
      localStorage.setItem(key, JSON.stringify(data));
      
      // Limpa dados antigos (mantém apenas últimos 50 eventos)
      this.cleanOldData();
    } catch (error) {
      console.warn('Erro ao salvar no localStorage:', error);
    }
  }

  // Limpa dados antigos do localStorage
  cleanOldData() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('servitec_'));
    if (keys.length > 50) {
      keys.slice(0, keys.length - 50).forEach(key => {
        localStorage.removeItem(key);
      });
    }
  }

  // Envia dados para sistema de tracking personalizado
  sendToCustomTracking(data) {
    // Aqui você pode implementar envio para sua própria API
    // Exemplo de envio para endpoint personalizado
    if (process.env.NODE_ENV === 'production') {
      fetch('/api/track', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      }).catch(error => {
        console.warn('Erro ao enviar dados de tracking:', error);
      });
    }
  }

  // Obtém relatório de UTMs
  getUTMReport() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('servitec_'));
    const events = keys.map(key => {
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch {
        return null;
      }
    }).filter(Boolean);

    return {
      totalEvents: events.length,
      utmSources: this.getUniqueValues(events, 'utm.utm_source'),
      utmMediums: this.getUniqueValues(events, 'utm.utm_medium'),
      utmCampaigns: this.getUniqueValues(events, 'utm.utm_campaign'),
      conversions: events.filter(e => e.type === 'conversion'),
      pageViews: events.filter(e => e.page),
      events: events
    };
  }

  // Helper para obter valores únicos
  getUniqueValues(events, path) {
    const values = events.map(event => {
      const keys = path.split('.');
      let value = event;
      for (const key of keys) {
        value = value?.[key];
      }
      return value;
    }).filter(Boolean);
    
    return [...new Set(values)];
  }

  // Limpa todos os dados de tracking
  clearTrackingData() {
    const keys = Object.keys(localStorage).filter(key => key.startsWith('servitec_'));
    keys.forEach(key => localStorage.removeItem(key));
  }
}

// Instância global do tracker
const utmTracker = new UTMTracker();

// Exporta funções úteis
export const trackEvent = (eventName, eventData) => utmTracker.trackEvent(eventName, eventData);
export const trackConversion = (conversionType, value) => utmTracker.trackConversion(conversionType, value);
export const getUTMReport = () => utmTracker.getUTMReport();
export const clearTrackingData = () => utmTracker.clearTrackingData();

export default utmTracker;
