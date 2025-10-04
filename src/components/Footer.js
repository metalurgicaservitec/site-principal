import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import LogoIcon from './LogoIcon';

const Footer = () => {
  const shouldReduceMotion = useReducedMotion();

  const navigationLinks = [
    { name: "Home", href: "/" },
    { name: "Quem Somos", href: "/about" },
    { name: "Serviços", href: "/services" },
    { name: "Portfólio", href: "/portfolio" },
    { name: "Contato", href: "/contact" }
  ];

  const companyLinks = [
    { name: "Sobre Nós", href: "/about" },
    { name: "Nossa História", href: "/about" },
    { name: "Política de Privacidade", href: "/privacy" },
    { name: "Termos de Serviço", href: "/terms" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/servitecmetalurgica" },
    { icon: Instagram, href: "https://instagram.com/servitecmetalurgica" },
    { icon: Linkedin, href: "https://linkedin.com/company/servitecmetalurgica" },
    { icon: Youtube, href: "https://youtube.com/servitecmetalurgica" }
  ];

  const AnimatedContainer = ({ className, delay = 0.1, children }) => {
    if (shouldReduceMotion) {
      return children;
    }
    return (
      <motion.div
        initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
        whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay, duration: 0.8 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  return (
    <footer className="relative w-full bg-servitec-dark text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 opacity-10" style={{
        backgroundImage: `radial-gradient(circle at 25% 0%, rgba(249, 115, 22, 0.1) 0%, transparent 50%),
                          radial-gradient(circle at 75% 100%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)`
      }}></div>

      <div className="container-custom relative z-10 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-16 mb-12">

          {/* Logo and Slogan */}
          <AnimatedContainer className="md:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <LogoIcon className="w-12 h-12" />
              <div>
                <h3 className="text-2xl font-heading font-bold text-white">Servitec</h3>
                <p className="text-servitec-orange text-sm">Metalúrgica Industrial</p>
              </div>
            </div>
            <p className="text-gray-300 text-base leading-relaxed">
              Soluções metálicas e industriais com qualidade, segurança e entrega no prazo.
            </p>
          </AnimatedContainer>

          {/* Navegação */}
          <AnimatedContainer delay={0.2} className="md:col-span-1">
            <h4 className="text-lg font-heading font-bold text-white mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-servitec-orange transition-all duration-300 group text-base"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedContainer>

          {/* Empresa */}
          <AnimatedContainer delay={0.3} className="md:col-span-1">
            <h4 className="text-lg font-heading font-bold text-white mb-6">Empresa</h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    to={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-servitec-orange transition-all duration-300 group text-base"
                  >
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </AnimatedContainer>

          {/* Contato */}
          <AnimatedContainer delay={0.4} className="md:col-span-1">
            <h4 className="text-lg font-heading font-bold text-white mb-6">Contato</h4>
            <div className="space-y-4">
              <div>
                <p className="text-gray-300 text-sm font-semibold mb-1">Telefone/WhatsApp:</p>
                <a 
                  href="https://wa.me/5592991502637" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-servitec-orange hover:text-orange-400 transition-colors duration-300 text-base"
                >
                  (92) 99150-2637
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm font-semibold mb-1">E-mail:</p>
                <a 
                  href="mailto:contato@servitecmetalurgica.com.br"
                  className="text-servitec-orange hover:text-orange-400 transition-colors duration-300 text-base"
                >
                  contato@servitecmetalurgica.com.br
                </a>
              </div>
              <div>
                <p className="text-gray-300 text-sm font-semibold mb-1">Endereço:</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  Arquiteto Jose Henriques Bento Rodrigues, 4114, Loja 02<br />
                  Monte das Oliveiras - Manaus/AM
                </p>
              </div>
            </div>
          </AnimatedContainer>

        </div>

        {/* Bottom Bar - Socials and Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Social Links */}
          <AnimatedContainer delay={0.5} className="flex flex-col items-center md:items-start space-y-4">
            <p className="text-gray-300 text-base font-semibold">Siga-nos:</p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-servitec-dark border border-gray-600 rounded-full flex items-center justify-center text-gray-300 hover:text-servitec-orange hover:border-servitec-orange transition-all duration-300 hover:scale-110"
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </AnimatedContainer>

          {/* Copyright and CNPJ */}
          <AnimatedContainer delay={0.6} className="text-center md:text-right space-y-2">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} Metalúrgica Servitec. Todos os direitos reservados.
            </p>
            <p className="text-gray-300 text-sm">
              CNPJ: 51.975.091/0001-11
            </p>
          </AnimatedContainer>
        </div>
      </div>
    </footer>
  );
};

export default Footer;