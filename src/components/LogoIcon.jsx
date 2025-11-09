import React from 'react';

const LogoIcon = ({ className = "w-12 h-12" }) => {
  return (
    <img 
      src="/images/engrenagem.png" 
      alt="Servitec Logo" 
      className={`${className} object-contain`}
    />
  );
};

export default LogoIcon;
