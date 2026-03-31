import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();

  if (location.pathname === '/explorar' || location.pathname === '/comunidade') {
    return null;
  }

  return (
    <footer className="main-footer">
      <div className="footer-top-border"></div>
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-text gradient-text" style={{ fontSize: '1.8rem', letterSpacing: '3px' }}>Alexandria</span>
          <p className="footer-slogan">Sua biblioteca digital e rede de conhecimento. Descubra, organize e conecte-se com outros exploradores literários.</p>
          <div className="social-links">
            <a href="#" className="social-icon">Twitter</a>
            <a href="#" className="social-icon">Instagram</a>
            <a href="#" className="social-icon">Discord</a>
          </div>
        </div>

        <div className="footer-links-wrapper">
          <div className="link-group">
            <h4>Navegação</h4>
            <a href="/">Início</a>
            <a href="/explorar">Catálogo</a>
            <a href="/comunidade">Comunidade</a>
          </div>
          <div className="link-group">
            <h4>Plataforma</h4>
            <a href="#">Sobre Nós</a>
            <a href="#">Diretrizes</a>
          </div>
          <div className="link-group">
            <h4>Legal</h4>
            <a href="#">Privacidade</a>
            <a href="#">Termos de Uso</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Alexandria. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;