import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/hero-section-1';
import ServicesCarouselSimplified from '../components/ServicesCarouselSimplified';

const PortfolioPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <HeroSection 
        title="Projetos entregues"
        subtitle=""
        description=""
        badge="500+ Projetos Entregues"
        primaryButton=""
        secondaryButton=""
        primaryButtonLink=""
        secondaryButtonLink=""
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        showCustomers={false}
      />

      {/* Services Section */}
      <motion.div
        className="-mt-32"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <ServicesCarouselSimplified />
      </motion.div>

      {/* CTA Buttons Section */}
      <motion.div
        className="w-full py-12"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <div className="container-custom">
          <div className="flex justify-center items-center">
            <a
              href="/contact"
              className="bg-servitec-orange hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Peça seu Orçamento
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioPage;
