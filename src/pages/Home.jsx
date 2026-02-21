import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Sua biblioteca digital e rede de conhecimento</h1>
          <p>Organize, descubra e compartilhe suas leituras no Alexandria.</p>
          <br />
          <button className="btn-primary" onClick={() => navigate('/login')}>
            Começar Agora
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Destaques da Semana</h2>
        <div className="carousel">
          <div className="book-item">
            <img src="https://m.media-amazon.com/images/I/91M9xPIf10L.jpg" alt="O Hobbit" className="book-cover" />
            <div className="book-info">
              <h3>O Hobbit</h3>
              <p>J.R.R. Tolkien</p>
            </div>
          </div>
          <div className="book-item">
            <img src="https://m.media-amazon.com/images/I/819js3EQwbL.jpg" alt="1984" className="book-cover" />
            <div className="book-info">
              <h3>1984</h3>
              <p>George Orwell</p>
            </div>
          </div>
          <div className="book-item">
            <img src="https://m.media-amazon.com/images/I/81af+S9r6cL.jpg" alt="Dom Casmurro" className="book-cover" />
            <div className="book-info">
              <h3>Dom Casmurro</h3>
              <p>Machado de Assis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;