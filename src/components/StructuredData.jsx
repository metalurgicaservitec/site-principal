import React from 'react';

const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Servitec Metalúrgica",
    "alternateName": "Servitec Metalúrgica Ltda",
    "url": "https://servitecmetalurgica.com.br",
    "logo": "https://servitecmetalurgica.com.br/images/engrenagem.png",
    "description": "Especializada em estruturas metálicas, soldagem MIG/TIG, tanques de combustível, escadas e tubulações industriais. 15+ anos de experiência, equipamentos de última geração.",
    "foundingDate": "2009",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arquiteto Jose Henriques Bento Rodrigues, 4114, Loja 02",
      "addressLocality": "Monte das Oliveiras",
      "addressRegion": "AM",
      "postalCode": "69000-000",
      "addressCountry": "BR"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+55-92-99150-2637",
      "contactType": "customer service",
      "areaServed": "BR",
      "availableLanguage": "Portuguese"
    },
    "sameAs": [
      "https://www.facebook.com/servitecmetalurgica",
      "https://www.instagram.com/servitecmetalurgica",
      "https://www.linkedin.com/company/servitecmetalurgica"
    ],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": -3.1190275,
        "longitude": -60.0217314
      },
      "geoRadius": "500000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Serviços de Metalurgia",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estruturas Metálicas",
            "description": "Projetos e execução de estruturas metálicas para indústrias, galpões e edificações comerciais"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Soldagem MIG e TIG",
            "description": "Soldas MIG, TIG e eletrodo revestido para aplicações industriais de alta precisão"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tanques de Combustível",
            "description": "Tanques de combustível em aço-carbono e aço inoxidável, com acabamento de alta qualidade"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Escadas Metálicas",
            "description": "Escadas metálicas de todos os modelos: caracol, reta, marinheiro e sob medida"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Tubulações Industriais",
            "description": "Instalação e manutenção de tubulações industriais com soldas especiais MIG e TIG"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://servitecmetalurgica.com.br/#business",
    "name": "Servitec Metalúrgica",
    "image": "https://servitecmetalurgica.com.br/images/engrenagem.png",
    "description": "Metalúrgica especializada em estruturas metálicas, soldagem e serviços industriais em Manaus/AM",
    "url": "https://servitecmetalurgica.com.br",
    "telephone": "+55-92-99150-2637",
    "email": "contato@servitecmetalurgica.com.br",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Arquiteto Jose Henriques Bento Rodrigues, 4114, Loja 02",
      "addressLocality": "Monte das Oliveiras",
      "addressRegion": "AM",
      "postalCode": "69000-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -3.1190275,
      "longitude": -60.0217314
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "08:00",
      "closes": "18:00"
    },
    "priceRange": "$$",
    "paymentAccepted": "Cash, Credit Card, Bank Transfer",
    "currenciesAccepted": "BRL"
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Servitec Metalúrgica",
    "url": "https://servitecmetalurgica.com.br",
    "description": "Site oficial da Servitec Metalúrgica - Soluções metálicas e industriais",
    "publisher": {
      "@type": "Organization",
      "name": "Servitec Metalúrgica"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://servitecmetalurgica.com.br/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
};

export default StructuredData;
