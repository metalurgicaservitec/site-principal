import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/hero-section-1';
import About from '../components/About';
import ServicesCarousel from '../components/ServicesCarousel';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <motion.div
      className="min-h-screen bg-white"
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <HeroSection 
        title="Soluções Metálicas e Industriais"
        subtitle="Com qualidade, segurança e entrega no prazo"
        description="Nossa equipe é altamente especializada em soldagem MIG, TIG e eletrodo revestido, além da execução de projetos como estruturas metálicas, tanques de combustível, escadas e tubulações industriais. Utilizamos equipamentos de última geração e materiais de alto padrão, assegurando obras resistentes, seguras e duradouras."
        badge="Resposta em até 24h"
        primaryButton="Peça seu Orçamento"
        secondaryButton="Nossos Serviços"
        primaryButtonLink="/contact"
        secondaryButtonLink="/services"
        backgroundImage="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        showCustomers={true}
      />
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
      >
        <ServicesCarousel />
      </motion.div>

      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <About />
      </motion.div>
      
      
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
      >
        <Contact />
        </motion.div>
      </motion.div>
  );
};

export default Home;
