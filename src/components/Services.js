import React, { useState } from 'react';

const Services = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({ name: '', phone: '' });

  const services = [
    {
      title: "Estruturas Metálicas",
      description: "Projetos e execução de estruturas metálicas para indústrias, galpões e edificações comerciais.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Telhados e Galpões",
      description: "Coberturas metálicas, galpões industriais e telhados com alta durabilidade e resistência.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Caixas d'Água de Aço",
      description: "Caixas d'água em aço inox, formato taça e charuto, com acabamento de alta qualidade.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Escadas",
      description: "Escadas metálicas de todos os modelos: caracol, reta, marinheiro e sob medida.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Tubulações Industriais",
      description: "Instalação e manutenção de tubulações industriais com soldas especiais MIG e TIG.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Redes de Combate a Incêndio",
      description: "Instalação e manutenção de sistemas de combate a incêndio em estruturas metálicas.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Soldagens Especiais",
      description: "Soldas MIG, TIG e eletrodo revestido para aplicações industriais de alta precisão.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Calhas e Rufos",
      description: "Fabricação e instalação de calhas metálicas e rufos para drenagem de águas pluviais.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Manutenção e Reformas",
      description: "Serviços de manutenção preventiva e corretiva em estruturas metálicas existentes.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Móveis Metálicos Planejados",
      description: "Fabricação de móveis metálicos personalizados e planejados para escritórios, indústrias e residências.",
      color: "from-gray-600 to-gray-700"
    },
    {
      title: "Equipamentos para Academias",
      description: "Desenvolvimento e fabricação de equipamentos metálicos especializados para academias e centros de fitness.",
      color: "from-gray-600 to-gray-700"
    }
  ];

  const handleServiceClick = (serviceTitle) => {
    console.log('Botão clicado! Serviço:', serviceTitle);
    console.log('Estado antes:', { isPopupOpen, selectedService });
    setSelectedService(serviceTitle);
    setIsPopupOpen(true);
    console.log('Estados definidos!');
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService('');
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

    const serviceText = selectedService ? ` para o serviço: ${selectedService}` : '';
    const message = `Olá! Meu nome é ${formData.name.trim()} e meu telefone é ${formData.phone.trim()}. Gostaria de solicitar um atendimento prioritário para orçamento${serviceText}.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/5592991502637?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
    closePopup();
  };

  return (
    <section id="services" className="relative bg-servitec-dark section-padding overflow-hidden">
      {/* Background Image with Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-servitec-dark/90 via-servitec-dark/80 to-servitec-dark/90"></div>
      </div>

      <div className="relative z-10 container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6">
            Nossos <span className="bg-gradient-to-r from-servitec-orange to-orange-400 bg-clip-text text-transparent">Serviços</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Soluções completas em metalurgia industrial com qualidade, 
            segurança e entrega no prazo garantidos.
          </p>
          
          {/* Botões de teste temporários */}
          <div className="mt-4 space-x-2">
            <button 
              onClick={() => handleServiceClick('Estruturas Metálicas')}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              TESTE 1
            </button>
            <button 
              onClick={() => {
                console.log('Teste direto!');
                setIsPopupOpen(true);
                setSelectedService('Teste Direto');
              }}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              TESTE 2
            </button>
            <button 
              onClick={() => {
                console.log('Estado atual:', { isPopupOpen, selectedService });
                alert(`Popup: ${isPopupOpen}, Serviço: ${selectedService}`);
              }}
              className="bg-green-500 text-white px-4 py-2 rounded"
            >
              VER ESTADO
            </button>
          </div>
        </div>

        {/* Services Grid with New Design */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group relative bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-10 rounded-2xl group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full bg-servitec-orange hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Solicitar Orçamento
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-servitec-orange mb-2">15+</div>
            <div className="text-gray-600 text-lg">Anos de Experiência</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-servitec-orange mb-2">500+</div>
            <div className="text-gray-600 text-lg">Projetos Entregues</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl md:text-5xl font-bold text-servitec-orange mb-2">100%</div>
            <div className="text-gray-600 text-lg">Satisfação Garantida</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-servitec-orange to-orange-600 rounded-2xl p-8 md:p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            Precisa de um orçamento personalizado?
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades específicas. 
            Entre em contato conosco e receba um orçamento detalhado.
          </p>
          <button 
            onClick={() => handleServiceClick('Orçamento Geral')}
            className="bg-white text-servitec-orange hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento Agora
          </button>
        </div>
      </div>

      {/* WhatsApp Popup Simples */}
      {console.log('Renderizando popup:', { isPopupOpen, selectedService })}
      {isPopupOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Solicitar Orçamento</h3>
                <p className="text-sm text-gray-600">
                  {selectedService ? `Serviço: ${selectedService}` : 'Atendimento prioritário'}
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

export default Services;