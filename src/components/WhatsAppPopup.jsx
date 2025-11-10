import React, { useState } from 'react';
import { X, MessageCircle, User, Phone } from 'lucide-react';

const WhatsAppPopup = ({ isOpen, onClose, buttonText = "Peça seu Orçamento", serviceName = "" }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Obter parâmetros UTM da URL atual
      const urlParams = new URLSearchParams(window.location.search);
      
      // Tentar obter UTMs do localStorage (persistência de sessão)
      let storedUTMs = null;
      try {
        const utmKeys = Object.keys(localStorage).filter(key => key.startsWith('servitec_'));
        if (utmKeys.length > 0) {
          // Buscar o primeiro evento que tenha UTMs
          for (const key of utmKeys.slice().reverse()) {
            try {
              const stored = JSON.parse(localStorage.getItem(key));
              if (stored && stored.utm && Object.keys(stored.utm).length > 0) {
                storedUTMs = stored.utm;
                break;
              }
            } catch (e) {
              continue;
            }
          }
        }
      } catch (e) {
        console.warn('Erro ao buscar UTMs do localStorage:', e);
      }

      // Priorizar UTMs da URL, caso contrário usar do localStorage
      const utmParams = {
        utm_source: urlParams.get('utm_source') || storedUTMs?.utm_source || null,
        utm_medium: urlParams.get('utm_medium') || storedUTMs?.utm_medium || null,
        utm_campaign: urlParams.get('utm_campaign') || storedUTMs?.utm_campaign || null,
        utm_term: urlParams.get('utm_term') || storedUTMs?.utm_term || null,
        utm_content: urlParams.get('utm_content') || storedUTMs?.utm_content || null,
      };

      // Obter dados de sessão completos
      const sessionData = {
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        platform: navigator.platform,
        cookieEnabled: navigator.cookieEnabled,
        onLine: navigator.onLine,
      };

      // Preparar dados para o webhook com todas as informações possíveis
      const leadData = {
        // Dados do formulário
        name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: null,
        service: serviceName || 'Não especificado',
        message: `Atendimento prioritário via popup - Serviço: ${serviceName || 'Não especificado'}`,
        
        // Informações de tracking
        timestamp: new Date().toISOString(),
        source: 'whatsapp_popup',
        page: window.location.pathname,
        url: window.location.href,
        referrer: document.referrer || null,
        
        // UTMs
        utm_source: utmParams.utm_source,
        utm_medium: utmParams.utm_medium,
        utm_campaign: utmParams.utm_campaign,
        utm_term: utmParams.utm_term,
        utm_content: utmParams.utm_content,
        
        // Dados de sessão
        userAgent: navigator.userAgent,
        screenResolution: sessionData.screenResolution,
        language: sessionData.language,
        timezone: sessionData.timezone,
        platform: sessionData.platform,
        cookieEnabled: sessionData.cookieEnabled,
        online: sessionData.onLine,
        
        // Informações adicionais
        viewport: `${window.innerWidth}x${window.innerHeight}`,
        title: document.title,
      };

      // Enviar dados para o webhook de forma assíncrona (não bloqueia o fluxo)
      // Usar Promise que não bloqueia para não esperar a resposta
      fetch('https://dev-manager-01-n8n.ekupxt.easypanel.host/webhook/leads', {
        method: 'POST',
        mode: 'cors', // Tenta com CORS primeiro
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData)
      }).then(response => {
        if (!response.ok) {
          console.warn('Webhook respondeu com erro:', response.status);
        } else {
          console.log('Lead enviado para webhook com sucesso');
        }
      }).catch(error => {
        // Se falhar por CORS, tenta método alternativo
        console.warn('Erro ao enviar para webhook (CORS possivelmente):', error.message);
        
        // Tentativa alternativa usando fetch com no-cors (não retorna resposta, mas pode funcionar)
        fetch('https://dev-manager-01-n8n.ekupxt.easypanel.host/webhook/leads', {
          method: 'POST',
          mode: 'no-cors', // Não requer CORS, mas não permite ler resposta
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(leadData)
        }).catch(() => {
          console.warn('Webhook não acessível (CORS bloqueado no servidor)');
        });
      });
      
      // Criar mensagem personalizada
      const serviceText = serviceName ? ` para o serviço: ${serviceName}` : '';
      const message = `Olá! Meu nome é ${formData.name.trim()} e meu telefone é ${formData.phone.trim()}. Gostaria de solicitar um atendimento prioritário para orçamento${serviceText}.`;
      
      // Codificar mensagem para URL
      const encodedMessage = encodeURIComponent(message);
      
      // URL do WhatsApp
      const whatsappUrl = `https://wa.me/5592991502637?text=${encodedMessage}`;
      
      // Redirecionar para WhatsApp
      window.open(whatsappUrl, '_blank');
      
      // Fechar pop-up
      onClose();
      
      // Resetar formulário
      setFormData({ name: '', phone: '' });
      
    } catch (error) {
      console.error('Erro ao enviar para WhatsApp:', error);
      alert('Erro ao abrir WhatsApp. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setFormData({ name: '', phone: '' });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl animate-in fade-in-0 zoom-in-95 duration-300">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-100 rounded-full">
              <MessageCircle className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Atendimento Prioritário</h3>
              <p className="text-sm text-gray-600">Conecte-se diretamente conosco</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-6 text-center">
            <p className="text-gray-700 mb-2">
              Para atendimento prioritário personalizado, digite seu nome e telefone:
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Nome */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Nome Completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Digite seu nome completo"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                Telefone/WhatsApp
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(92) 99999-9999"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-colors"
                  required
                />
              </div>
            </div>

            {/* Botões */}
            <div className="flex gap-3 pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 disabled:bg-green-400 text-white rounded-xl font-medium transition-colors flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    <MessageCircle className="w-4 h-4" />
                    Ir para WhatsApp
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default WhatsAppPopup;
