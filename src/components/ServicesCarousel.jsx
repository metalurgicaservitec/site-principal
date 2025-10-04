import React from 'react';
import { ServiceCarousel } from './ui/service-carousel.jsx';
import { useWhatsAppPopup } from '../hooks/useWhatsAppPopup';
import WhatsAppPopup from './WhatsAppPopup';
import { trackEvent } from '../lib/utmTracker';
import { 
  Building, 
  Wrench, 
  Droplets, 
  ArrowUpDown, 
  Zap, 
  Shield, 
  Flame, 
  Gauge, 
  Construction 
} from 'lucide-react';

const ServicesCarousel = () => {
  const services = [
    {
      number: "001",
      title: "Estruturas Metálicas",
      description: "Projetos e execução de estruturas metálicas para indústrias, galpões e edificações comerciais.",
      icon: Building,
      gradient: "from-blue-100 to-blue-200 dark:from-blue-900/50 dark:to-blue-800/50",
      image: "https://i.ibb.co/84MKgSK1/IMG-20251001-WA0036.jpg"
    },
    {
      number: "002", 
      title: "Telhados e Galpões",
      description: "Coberturas metálicas, galpões industriais e telhados com alta durabilidade e resistência.",
      icon: Wrench,
      gradient: "from-orange-100 to-orange-200 dark:from-orange-900/50 dark:to-orange-800/50",
      image: "https://i.ibb.co/0yjR0QkQ/IMG-20251001-WA0043.jpg"
    },
    {
      number: "003",
      title: "Tanques de combustível",
      description: "Tanques de combustível em aço-carbono e aço inoxidável, com acabamento de alta qualidade.",
      icon: Droplets,
      gradient: "from-cyan-100 to-cyan-200 dark:from-cyan-900/50 dark:to-cyan-800/50",
      image: "https://i.ibb.co/xKMtCLMz/2d999d5c-6877-4e33-842e-cd1822da38bf.jpg"
    },
    {
      number: "004",
      title: "Escadas",
      description: "Escadas metálicas de todos os modelos: caracol, reta, marinheiro e sob medida.",
      icon: ArrowUpDown,
      gradient: "from-purple-100 to-purple-200 dark:from-purple-900/50 dark:to-purple-800/50",
      image: "https://i.ibb.co/wFs6PxYK/IMG-20251001-WA0095.jpg"
    },
    {
      number: "005",
      title: "Tubulações Industriais",
      description: "Instalação e manutenção de tubulações industriais com soldas especiais MIG e TIG.",
      icon: Zap,
      gradient: "from-yellow-100 to-yellow-200 dark:from-yellow-900/50 dark:to-yellow-800/50",
      image: "https://i.ibb.co/S4vKb5rp/IMG-20251001-WA0026.jpg"
    },
    {
      number: "006",
      title: "Redes de Combate a Incêndio",
      description: "Instalação e manutenção de sistemas de combate a incêndio em estruturas metálicas.",
      icon: Shield,
      gradient: "from-red-100 to-red-200 dark:from-red-900/50 dark:to-red-800/50",
      image: "https://i.ibb.co/YFXCqSg3/Sistemas-de-incencido.jpg"
    },
    {
      number: "007",
      title: "Soldagens Especiais",
      description: "Soldas MIG, TIG e eletrodo revestido para aplicações industriais de alta precisão.",
      icon: Flame,
      gradient: "from-pink-100 to-pink-200 dark:from-pink-900/50 dark:to-pink-800/50",
      image: "https://i.ibb.co/bjn7wykz/IMG-20251001-WA0023.jpg"
    },
    {
      number: "008",
      title: "Calhas e Rufos",
      description: "Fabricação e instalação de calhas metálicas e rufos para drenagem de águas pluviais.",
      icon: Gauge,
      gradient: "from-green-100 to-green-200 dark:from-green-900/50 dark:to-green-800/50",
      image: "https://i.ibb.co/Y4BwmN2W/Calhas.jpg"
    },
    {
      number: "009",
      title: "Manutenção e Reformas",
      description: "Serviços de manutenção preventiva e corretiva em estruturas metálicas existentes.",
      icon: Construction,
      gradient: "from-gray-100 to-gray-200 dark:from-gray-900/50 dark:to-gray-800/50",
      image: "https://i.ibb.co/8gYq0pYQ/IMG-20251001-WA0031.jpg"
    }
  ];

  const { isOpen, openPopup, closePopup } = useWhatsAppPopup();

  const handleSolicitarOrcamento = () => {
    trackEvent('cta_click', { 
      button: 'solicitar_orcamento_agora', 
      page: window.location.pathname 
    });
    openPopup('Solicitar Orçamento Agora');
  };

  return (
    <section id="services" className="relative bg-white section-padding overflow-hidden">
      {/* Background Image with Gradient */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-gray-50/80 to-white/90"></div>
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
        </div>

        {/* Service Carousel */}
        <div className="mb-16">
          <ServiceCarousel services={services} />
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
          <p className="text-white text-lg mb-8 max-w-2xl mx-auto">
            Nossa equipe está pronta para atender suas necessidades específicas. 
            Entre em contato conosco e receba um orçamento detalhado.
          </p>
          <button 
            onClick={handleSolicitarOrcamento}
            className="bg-white text-servitec-orange hover:bg-gray-100 font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Solicitar Orçamento Agora
          </button>
        </div>
      </div>
      
      {/* Pop-up WhatsApp */}
      <WhatsAppPopup 
        isOpen={isOpen} 
        onClose={closePopup} 
        buttonText="Solicitar Orçamento Agora"
      />
    </section>
  );
};

export default ServicesCarousel;
