"use client";

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

const PortfolioCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  const portfolioItems = [
    {
      id: 1,
      title: "Galpão Industrial Moderno",
      category: "Estruturas Metálicas",
      location: "Manaus - AM",
      duration: "45 dias",
      description: "Estrutura metálica de 2.000m² com cobertura em telhas metálicas"
    },
    {
      id: 2,
      title: "Caixa d'Água de Aço Inox",
      category: "Caixas d'Água",
      location: "Manaus - AM",
      duration: "15 dias",
      description: "Caixa d'água formato taça com capacidade para 50.000 litros"
    },
    {
      id: 3,
      title: "Estrutura Metálica Comercial",
      category: "Estruturas Metálicas",
      location: "Manaus - AM",
      duration: "60 dias",
      description: "Estrutura para edifício comercial de 5 andares"
    },
    {
      id: 4,
      title: "Escada Caracol Metálica",
      category: "Escadas",
      location: "Manaus - AM",
      duration: "10 dias",
      description: "Escada metálica caracol para acesso ao mezanino"
    },
    {
      id: 5,
      title: "Galpão Logístico",
      category: "Galpões",
      location: "Manaus - AM",
      duration: "30 dias",
      description: "Galpão logístico com 1.500m² e sistema de ventilação"
    },
    {
      id: 6,
      title: "Caixa d'Água Charuto",
      category: "Caixas d'Água",
      location: "Manaus - AM",
      duration: "12 dias",
      description: "Caixa d'água formato charuto com 30.000 litros"
    },
    {
      id: 7,
      title: "Tubulação Industrial",
      category: "Tubulações",
      location: "Manaus - AM",
      duration: "20 dias",
      description: "Sistema de tubulações industriais com soldas especiais"
    },
    {
      id: 8,
      title: "Soldagem Especial",
      category: "Soldagens",
      location: "Manaus - AM",
      duration: "8 dias",
      description: "Soldas MIG e TIG para aplicações industriais"
    }
  ];

  // Duplicar itens para scroll infinito
  const duplicatedItems = [...portfolioItems, ...portfolioItems, ...portfolioItems];

  useEffect(() => {
    if (!api) {
      return;
    }

    const timer = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 3000); // Muda a cada 3 segundos

    return () => clearTimeout(timer);
  }, [api, current]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full py-32 lg:py-48">
      <div className="container-custom">
        <div className="flex flex-col gap-10">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-gray-900 mb-6">
              Portfólio / <span className="bg-gradient-to-r from-servitec-orange to-orange-400 bg-clip-text text-transparent">Obras Realizadas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça alguns dos nossos projetos mais recentes e veja a qualidade 
              do nosso trabalho em cada obra entregue.
            </p>
          </div>
          
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {duplicatedItems.map((item, index) => (
                <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/4 px-2" key={`${item.id}-${index}`}>
                  <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:scale-105 h-full flex flex-col p-1">
                    {/* Header - Centralized */}
                    <div className="p-6 pb-4 text-center">
                      <h3 className="text-lg font-heading font-bold text-servitec-dark mb-2 group-hover:text-servitec-orange transition-colors">
                        {item.title}
                      </h3>
                    </div>

                    {/* Content */}
                    <div className="px-6 pb-6 flex-1 flex flex-col">
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed flex-1">
                        {item.description}
                      </p>

                      {/* Project Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-servitec-orange rounded-full mr-3"></span>
                          <strong>Local:</strong> {item.location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <span className="w-2 h-2 bg-servitec-orange rounded-full mr-3"></span>
                          <strong>Prazo:</strong> {item.duration}
                        </div>
                      </div>

                      {/* CTA Button */}
                      <button 
                        onClick={scrollToContact}
                        className="w-full bg-servitec-orange hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-sm mt-auto"
                      >
                        Solicitar Orçamento
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <div className="bg-gradient-to-r from-servitec-blue-light to-servitec-blue-lighter rounded-2xl p-8 md:p-12 text-white">
              <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Gostou do nosso trabalho?
              </h3>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                Fale agora pelo WhatsApp e solicite seu orçamento personalizado!
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-servitec-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Fale agora pelo WhatsApp!
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { PortfolioCarousel };
