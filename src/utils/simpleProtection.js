// Proteção Simples e Compatível
(function() {
  'use strict';
  
  // Verificar se estamos no navegador
  if (typeof window === 'undefined') return;
  
  // Função para mostrar aviso
  function showWarning(message) {
    const overlay = document.createElement('div');
    overlay.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.9);
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      font-weight: bold;
      z-index: 999999;
      font-family: Arial, sans-serif;
    `;
    overlay.innerHTML = `
      <div style="text-align: center;">
        <div style="color: #ff4444; margin-bottom: 20px;">⚠️ ACESSO NEGADO ⚠️</div>
        <div>${message}</div>
        <div style="margin-top: 20px; font-size: 16px; color: #ccc;">
          Este site é protegido por direitos autorais
        </div>
      </div>
    `;
    
    document.body.appendChild(overlay);
    
    setTimeout(() => {
      if (overlay.parentNode) {
        overlay.parentNode.removeChild(overlay);
      }
    }, 3000);
  }
  
  // Desabilitar clique direito
  document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    showWarning('Clique direito desabilitado!');
    return false;
  });
  
  // Desabilitar atalhos de teclado
  document.addEventListener('keydown', function(e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'u') ||
      (e.ctrlKey && e.key === 's')
    ) {
      e.preventDefault();
      showWarning('Atalho desabilitado!');
      return false;
    }
  });
  
  // Desabilitar seleção de texto
  document.addEventListener('selectstart', function(e) {
    e.preventDefault();
    return false;
  });
  
  // Adicionar CSS para desabilitar seleção
  const style = document.createElement('style');
  style.textContent = `
    * {
      -webkit-user-select: none !important;
      -moz-user-select: none !important;
      -ms-user-select: none !important;
      user-select: none !important;
    }
    
    input, textarea {
      -webkit-user-select: text !important;
      -moz-user-select: text !important;
      -ms-user-select: text !important;
      user-select: text !important;
    }
  `;
  document.head.appendChild(style);
  
  // Aviso no console
  console.clear();
  console.log('%c⚠️ AVISO LEGAL ⚠️', 'color: red; font-size: 16px; font-weight: bold;');
  console.log('%cEste site é protegido por direitos autorais.', 'color: red; font-size: 14px;');
  console.log('%cQualquer tentativa de cópia é proibida.', 'color: red; font-size: 14px;');
  
})();
