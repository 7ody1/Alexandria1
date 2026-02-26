import React from 'react';
import { useNavigate } from 'react-router-dom';
import { biblioteca } from '../data/Livros';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      
      <section className="hero">
        <div className="hero-content">
          <h1>Sua biblioteca digital e rede de conhecimento</h1>
          <p>Organize, descubra e compartilhe suas leituras no Alexandria.</p>
          
          <button 
            className="btn-primary" 
            onClick={() => navigate('/login')}
          >
            Começar Agora
          </button>
        </div>
      </section>

      <section className="section">
        <h2>Destaques da Semana</h2>

        <div className="carousel">
          {biblioteca && biblioteca.length > 0 ? (
            biblioteca.map((livro) => (
              <div
                className="book-item"
                key={livro.id}
                onClick={() => navigate(`/livro/${livro.id}`)}
              >
                <img
                  src={livro.capa}
                  alt={livro.titulo}
                  className="book-cover"
                  onError={(e) => {
                    e.target.src = "/fallback.jpg"; // opcional
                  }}
                />

                <div className="book-info">
                  <h3>{livro.titulo}</h3>
                  <p>{livro.autor}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum livro encontrado.</p>
          )}
        </div>

      </section>
    </div>
  );
};

export default Home;