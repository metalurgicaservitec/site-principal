import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/hero-section-1';
import Contact from '../components/Contact';

const ContactPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <HeroSection 
        title=""
        subtitle="Fale Conosco"
        description="Entre em contato conosco para solicitar um orçamento ou tirar suas dúvidas. Nossa equipe está pronta para atender você com agilidade e profissionalismo."
        badge="Atendimento Rápido"
        primaryButton="WhatsApp"
        secondaryButton="Nossos Serviços"
        primaryButtonLink="https://wa.me/5592991502637"
        secondaryButtonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        showCustomers={false}
      />

      {/* Contact Section */}
      <motion.div
        className="-mt-32"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <Contact />
      </motion.div>
    </motion.div>
  );
};

export default ContactPage;
