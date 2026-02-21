import React from 'react';
import { biblioteca } from '../data/Livros';
const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-content">
          <h1>Sua biblioteca digital e um local onde você posta nudes</h1>
          <p>Organize, descubra e compartilhe suas leituras no Alexandria.</p>
          <br />
          <button className="btn-primary">Começar Agora</button>
        </div>
      </section>

      <section className="section">
        <h2>Destaques da Semana</h2>
        <div className="carousel">
          {biblioteca.map((livro) => (
            <div key={livro.id} className="book-item">
              <img src={livro.capa} alt={livro.titulo} className="book-cover" />
              <div className="book-info">
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
export default Home;