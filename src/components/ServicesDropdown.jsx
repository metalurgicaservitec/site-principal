import React from 'react';
import { DropdownMenu } from './ui/dropdown-menu';
import { ServiceAppearTransition } from './ui/page-transition';
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
import { useNavigate } from 'react-router-dom';

const ServicesDropdown = ({ onClose, isScrolled }) => {
  const navigate = useNavigate();

  const scrollToService = (serviceId) => {
    // Fechar menu mobile se a função onClose estiver disponível
    if (onClose) {
      onClose();
    }
    
    // Navegar para a página de serviços
    navigate('/services');
    
    // Aguardar um pouco para a página carregar e então fazer scroll
    setTimeout(() => {
      const element = document.getElementById(serviceId);
      if (element) {
        // Calcular posição com offset para o header
        const headerHeight = 150; // Altura do header + margem de segurança
        const elementPosition = element.offsetTop - headerHeight;
        
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        });
      }
    }, 100);
  };

  const services = [
    {
      label: "Estruturas Metálicas",
      onClick: () => scrollToService('estruturas-metalicas'),
      Icon: <Building className="h-4 w-4" />
    },
    {
      label: "Telhados e Coberturas",
      onClick: () => scrollToService('telhados-coberturas'),
      Icon: <Wrench className="h-4 w-4" />
    },
    {
      label: "Galpões Metálicos",
      onClick: () => scrollToService('galpoes-metalicos'),
      Icon: <Building className="h-4 w-4" />
    },
    {
      label: "Tanques de combustível",
      onClick: () => scrollToService('tanques-armazenamento-combustivel'),
      Icon: <Droplets className="h-4 w-4" />
    },
    {
      label: "Escadas de Todos os Modelos",
      onClick: () => scrollToService('escadas'),
      Icon: <ArrowUpDown className="h-4 w-4" />
    },
    {
      label: "Tubulações Industriais",
      onClick: () => scrollToService('tubulacoes-industriais'),
      Icon: <Zap className="h-4 w-4" />
    },
    {
      label: "Redes de Combate a Incêndio",
      onClick: () => scrollToService('redes-incendio'),
      Icon: <Shield className="h-4 w-4" />
    },
    {
      label: "Soldagens Especiais",
      onClick: () => scrollToService('soldagens-especiais'),
      Icon: <Flame className="h-4 w-4" />
    },
    {
      label: "Calhas e Rufos",
      onClick: () => scrollToService('calhas-rufos'),
      Icon: <Gauge className="h-4 w-4" />
    },
    {
      label: "Manutenção e Reformas",
      onClick: () => scrollToService('manutencao-reformas'),
      Icon: <Construction className="h-4 w-4" />
    },
    {
      label: "Móveis Metálicos Planejados",
      onClick: () => scrollToService('moveis-metalicos-planejados'),
      Icon: <Building className="h-4 w-4" />
    },
    {
      label: "Equipamentos para Academias",
      onClick: () => scrollToService('equipamentos-academias'),
      Icon: <Wrench className="h-4 w-4" />
    }
  ];

  return (
    <DropdownMenu options={services} isScrolled={isScrolled}>
      <span className="flex items-center gap-2">
        Serviços
      </span>
    </DropdownMenu>
  );
};

export default ServicesDropdown;
