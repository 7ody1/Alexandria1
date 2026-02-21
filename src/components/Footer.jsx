import React from 'react';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-brand">
          <span className="logo-text">Alexandria</span>
          <p>Indexação e Gestão de Conhecimento v1.0.4</p>
        </div>
        
        <div className="footer-links">
          <div className="link-group">
            <h4>Sistema</h4>
            <a href="#">Status</a>
            <a href="#">Documentação</a>
          </div>
          <div className="link-group">
            <h4>Rede</h4>
            <a href="#">Comunidade</a>
            <a href="#">Diretrizes</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 Alexandria Framework. Todos os direitos reservados.</p>
        <p className="terminal-text">Terminal: 192.168.1.1</p>
      </div>
    </footer>
  );
};

export default Footer;