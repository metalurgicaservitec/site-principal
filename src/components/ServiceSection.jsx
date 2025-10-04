import React, { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, CheckCircle } from 'lucide-react';

const ServiceSection = ({ 
  id, 
  title, 
  description, 
  features, 
  image, 
  color = "from-servitec-orange to-orange-600",
  isFirst = false
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const handleServiceClick = () => {
    console.log('Clicou no serviço:', title);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setFormData({ name: '', phone: '' });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const message = `Olá! Meu nome é ${formData.name.trim()} e meu telefone é ${formData.phone.trim()}. Gostaria de solicitar um atendimento prioritário para orçamento para o serviço: ${title}.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5592991502637?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closePopup();
  };

  return (
    <section id={id} className={`${isFirst ? 'py-8' : 'pt-16 pb-8'} px-4 sm:px-6 lg:px-8 bg-white`}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900">
                {title}
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-servitec-orange to-orange-400 rounded-full mt-2"></div>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed text-justify">
              {description}
            </p>

            <div className="space-y-4">
              <h3 className="text-2xl font-heading font-bold text-gray-900 mb-4">
                Nossos Diferenciais:
              </h3>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-servitec-orange flex-shrink-0" />
                    <span className="text-gray-600 text-lg text-justify">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <Button
                onClick={handleServiceClick}
                className="bg-servitec-orange hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Solicitar Orçamento
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>

          {/* Imagem */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-[28rem] object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-servitec-dark/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>

      {/* WhatsApp Popup */}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Solicitar Orçamento</h3>
                <p className="text-sm text-gray-600">
                  Serviço: {title}
                </p>
              </div>
              <button
                onClick={closePopup}
                className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
              >
                ✕
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Digite seu nome completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-colors"
                    required
                  />
                </div>

                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="(92) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-servitec-orange focus:border-servitec-orange transition-colors"
                    required
                  />
                </div>

                {/* Botões */}
                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={closePopup}
                    className="flex-1 px-4 py-3 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-xl font-medium transition-colors"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="flex-1 px-4 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl font-medium transition-colors"
                  >
                    Ir para WhatsApp
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ServiceSection;
