import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Google Analytics 4 e Google Tag Manager
const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Carrega Google Tag Manager
    const loadGTM = () => {
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
      document.head.appendChild(script);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      window.gtag = gtag;
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID', {
        page_title: document.title,
        page_location: window.location.href,
        custom_map: {
          'utm_source': 'utm_source',
          'utm_medium': 'utm_medium',
          'utm_campaign': 'utm_campaign',
          'utm_term': 'utm_term',
          'utm_content': 'utm_content'
        }
      });
    };

    // Carrega Google Tag Manager
    const loadGTMContainer = () => {
      const script = document.createElement('script');
      script.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-XXXXXXX');
      `;
      document.head.appendChild(script);
    };

    // Carrega os scripts
    loadGTM();
    loadGTMContainer();

    // Rastreia mudanças de página
    if (window.gtag) {
      window.gtag('config', 'GA_MEASUREMENT_ID', {
        page_path: location.pathname,
        page_title: document.title
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
