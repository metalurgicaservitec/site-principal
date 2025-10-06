import React from 'react';
import { ServiceCarousel } from './ui/service-carousel.jsx';
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

const ServicesCarouselSimplified = () => {
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

  return (
    <div className="w-full">
      <div className="container-custom">
        {/* Service Carousel */}
        <ServiceCarousel services={services} />
      </div>
    </div>
  );
};

export default ServicesCarouselSimplified;
