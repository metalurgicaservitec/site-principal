import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  const location = useLocation();

  // Scroll para o topo sempre que a rota mudar
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-servitec-dark">
      <Outlet />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
