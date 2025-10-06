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

  const formatPhone = (phone) => {
    // Remove todos os caracteres não numéricos
    const numbers = phone.replace(/\D/g, '');
    
    // Se começar com 0, remove
    if (numbers.startsWith('0')) {
      return numbers.substring(1);
    }
    
    // Se não começar com 55, adiciona
    if (!numbers.startsWith('55')) {
      return '55' + numbers;
    }
    
    return numbers;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Formatar telefone
      const formattedPhone = formatPhone(formData.phone);
      
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
