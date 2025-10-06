import { useState } from 'react';

export const useWhatsAppPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonText, setButtonText] = useState('');
  const [serviceName, setServiceName] = useState('');

  const openPopup = (text = 'Peça seu Orçamento', service = '') => {
    setButtonText(text);
    setServiceName(service);
    setIsOpen(true);
  };

  const closePopup = () => {
    setIsOpen(false);
    setButtonText('');
    setServiceName('');
  };

  return {
    isOpen,
    buttonText,
    serviceName,
    openPopup,
    closePopup
  };
};
