import React from 'react';
import { motion } from 'framer-motion';
import { HeroSection } from '../components/ui/hero-section-1';
import ServiceSection from '../components/ServiceSection';

const ServicesPage = () => {
  return (
    <motion.div 
      className="min-h-screen bg-white"
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      <HeroSection 
        title="Nossos Serviços"
        subtitle="Soluções metálicas e industriais"
        badge="15+ Anos de Experiência"
        primaryButton="Peça seu Orçamento"
        secondaryButton="Ver Portfólio"
        primaryButtonLink="/contact"
        secondaryButtonLink="/portfolio"
        backgroundImage="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
        showCustomers={false}
      />

      {/* Services Sections */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="-mt-32"
      >
        {/* Estruturas Metálicas */}
        <ServiceSection
          id="estruturas-metalicas"
          title="Estruturas Metálicas"
          description="Projetamos e construímos estruturas metálicas robustas e seguras para diversos segmentos industriais e comerciais. Nossa expertise garante soluções personalizadas e de alta qualidade, desde galpões até edifícios complexos."
          features={[
            "Projetos personalizados e otimizados",
            "Cálculos estruturais precisos",
            "Soldagem especializada (MIG, TIG, Eletrodo)",
            "Montagem e instalação com equipe qualificada",
            "Conformidade com normas técnicas (NBR)",
            "Alta durabilidade e resistência",
            "Manutenção preventiva e corretiva"
          ]}
          image="https://i.ibb.co/84MKgSK1/IMG-20251001-WA0036.jpg"
          color="from-gray-600 to-gray-700"
          isFirst={true}
        />

        {/* Telhados e Coberturas */}
        <ServiceSection
          id="telhados-coberturas"
          title="Telhados e Coberturas"
          description="Especializados em telhados metálicos e coberturas industriais, oferecemos soluções duráveis e eficientes para proteção contra intempéries. Nossos telhados garantem máxima durabilidade e estética."
          features={[
            "Telhados metálicos de alta qualidade",
            "Coberturas industriais resistentes",
            "Sistemas de vedação avançados",
            "Instalação profissional e segura",
            "Manutenção preventiva especializada",
            "Projetos personalizados conforme necessidade"
          ]}
          image="https://i.ibb.co/0yjR0QkQ/IMG-20251001-WA0043.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Galpões Metálicos */}
        <ServiceSection
          id="galpoes-metalicos"
          title="Galpões Metálicos"
          description="Construímos galpões metálicos industriais e comerciais com estrutura robusta e alta durabilidade. Nossos galpões são projetados para atender às necessidades específicas de cada cliente, oferecendo máxima funcionalidade e resistência."
          features={[
            "Projetos personalizados conforme necessidades",
            "Estrutura metálica de alta resistência",
            "Cobertura metálica durável e impermeável",
            "Sistemas de ventilação e iluminação natural",
            "Instalação completa com equipe especializada",
            "Conformidade com normas técnicas",
            
          ]}
          image="https://i.ibb.co/8nNL8HpT/IMG-20251001-WA0035.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Tanques de armazenamento de combustível */}
        <ServiceSection
          id="tanques-armazenamento-combustivel"
          title="Tanques de Armazenamento de Combustível"
          description="Fabricamos tanques e reservatórios em aço-carbono e aço inoxidável, garantindo alta resistência, durabilidade e segurança. Nossos produtos atendem desde pequenas demandas residenciais até grandes projetos industriais, assegurando eficiência e qualidade no armazenamento."
          features={[
            "Produção em aço-carbono e aço inoxidável de alta qualidade",
            "Capacidades de 1.000L a 60.000L",
            "Tratamento anticorrosivo especializado",
            "Instalação e montagem completa",
            "Manutenção e limpeza especializada",
            "Garantia de 10 anos contra corrosão"
          ]}
          image="https://i.ibb.co/xKMtCLMz/2d999d5c-6877-4e33-842e-cd1822da38bf.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Escadas */}
        <ServiceSection
          id="escadas"
          title="Escadas de Todos os Modelos"
          description="Fabricamos escadas metálicas de diversos modelos e tamanhos, desde escadas residenciais até escadas industriais de grande porte. Todas com alta resistência e acabamento profissional."
          features={[
            "Escadas residenciais e industriais",
            "Diversos modelos e tamanhos",
            "Materiais de alta qualidade",
            "Acabamento profissional",
            "Instalação segura e precisa",
            "Manutenção especializada",
          ]}
          image="https://i.ibb.co/wFs6PxYK/IMG-20251001-WA0095.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Tubulações Industriais */}
        <ServiceSection
          id="tubulacoes-industriais"
          title="Tubulações Industriais"
          description="Especializados em tubulações industriais de alta pressão e resistência. Nossas tubulações atendem às mais rigorosas normas técnicas e garantem máxima eficiência operacional."
          features={[
            "Tubulações de alta pressão",
            "Materiais resistentes à corrosão",
            "Soldagem especializada",
            "Instalação e montagem profissional",
            "Testes de pressão e vazamento",
            "Manutenção preventiva",
            "Conformidade com normas técnicas"
          ]}
          image="https://i.ibb.co/S4vKb5rp/IMG-20251001-WA0026.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Redes de Combate a Incêndio */}
        <ServiceSection
          id="redes-incendio"
          title="Redes de Combate a Incêndio"
          description="Instalamos e mantemos redes de combate a incêndio completas, garantindo segurança e conformidade com as normas de segurança. Nossas instalações atendem aos mais rigorosos padrões de qualidade."
          features={[
            "Sistemas de sprinklers",
            "Hidrantes e mangueiras",
            "Sistemas de detecção",
            "Testes e manutenção",
            "Certificação de segurança",
            "Garantia de funcionamento"
          ]}
          image="https://i.ibb.co/YFXCqSg3/Sistemas-de-incencido.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Soldagens Especiais */}
        <ServiceSection
          id="soldagens-especiais"
          title="Soldagens Especiais"
          description="Realizamos soldagens especiais MIG, TIG e eletrodo revestido para diversos tipos de materiais. Nossa equipe é altamente qualificada e certificada para trabalhos de alta precisão."
          features={[
            "Soldagem MIG, TIG e eletrodo",
            "Materiais diversos (aço, inox, alumínio)",
            "Equipe certificada e qualificada",
            "Trabalhos de alta precisão",
            "Testes de qualidade",
            "Manutenção especializada",
            "Garantia de solda"
          ]}
          image="https://i.ibb.co/bjn7wykz/IMG-20251001-WA0023.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Calhas e Rufos */}
        <ServiceSection
          id="calhas-rufos"
          title="Calhas e Rufos"
          description="Fabricamos e instalamos calhas e rufos metálicos de alta qualidade para drenagem eficiente. Nossos produtos garantem proteção contra infiltrações e durabilidade excepcional."
          features={[
            "Calhas metálicas personalizadas",
            "Rufos de alta qualidade",
            "Sistemas de drenagem eficientes",
            "Instalação profissional",
            "Manutenção especializada",
            "Garantia contra infiltrações",
            "Acabamento estético"
          ]}
          image="https://i.ibb.co/Y4BwmN2W/Calhas.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Manutenção e Reformas */}
        <ServiceSection
          id="manutencao-reformas"
          title="Manutenção e Reformas"
          description="Oferecemos serviços completos de manutenção e reforma para estruturas metálicas existentes. Nossa equipe especializada garante a recuperação e modernização de suas instalações."
          features={[
            "Manutenção preventiva e corretiva",
            "Reformas e modernizações",
            "Restauração de estruturas",
            "Atualização de sistemas",
            "Inspeções técnicas",
            "Relatórios detalhados",
            "Garantia dos serviços"
          ]}
          image="https://i.ibb.co/8gYq0pYQ/IMG-20251001-WA0031.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Móveis Metálicos Planejados */}
        <ServiceSection
          id="moveis-metalicos-planejados"
          title="Móveis Metálicos Planejados"
          description="Fabricamos móveis metálicos personalizados e planejados para escritórios, indústrias e residências. Nossos móveis combinam funcionalidade, durabilidade e design moderno, atendendo às necessidades específicas de cada ambiente."
          features={[
            "Móveis de escritório personalizados",
            "Estantes e prateleiras industriais",
            "Bancadas e mesas de trabalho",
            "Armários e gaveteiros metálicos",
            "Projetos sob medida",
            "Acabamento de alta qualidade",
            "Instalação profissional",
            "Garantia de durabilidade"
          ]}
          image="https://i.ibb.co/7dTPmR3L/Imagem-do-Whats-App-de-2025-10-02-s-09-10-10-024e252a.jpg"
          color="from-gray-600 to-gray-700"
        />

        {/* Equipamentos para Academias */}
        <ServiceSection
          id="equipamentos-academias"
          title="Equipamentos para Academias"
          description="Desenvolvemos e fabricamos equipamentos metálicos especializados para academias e centros de fitness. Nossos equipamentos são projetados para alta resistência, segurança e durabilidade, atendendo aos mais rigorosos padrões de qualidade."
          features={[
            "Racks e gaiolas de musculação",
            "Bancos e suportes de exercícios",
            "Estruturas para pesos e halteres",
            "Equipamentos de cardio personalizados",
            "Projetos sob medida",
            "Materiais de alta resistência",
            "Acabamento anti-corrosivo",
            "Instalação e montagem especializada",
            "Garantia de segurança"
          ]}
          image="https://i.ibb.co/DfntBYFx/Imagem-do-Whats-App-de-2025-10-02-s-09-10-10-d1c81fe5.jpg"
          color="from-gray-600 to-gray-700"
        />
      </motion.div>


    </motion.div>
  );
};

export default ServicesPage;
