import React from 'react';
import { useNavigate } from 'react-router-dom';
import { biblioteca } from '../data/Livros'; // Verifique se o caminho está correto
import '../App.css'; // ESTA LINHA É OBRIGATÓRIA PARA O CSS FUNCIONAR

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
          {biblioteca.map((livro) => (
            <div className="book-item" key={livro.id} onClick={() => navigate(`/livro/${livro.id}`)}>
              <img src={livro.capa} alt={livro.titulo} className="book-cover" />
              <div className="book-info">
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
              </div>
            </div>
          ))}
          
      <div className="book-item">
  <img 
    src="https://i0.wp.com/gay.blog.br/wp-content/uploads/2023/07/Jogador-Vampeta-pelado-na-revista-g-magazine-11.jpg?w=650&ssl=1" 
    alt="Dom Casmurro" 
    className="book-cover" 
  />
  <div className="book-info">
    <h3>Revista do Vampeta</h3>
    <p>Vampeta é o cara</p>
  </div>
</div>
        </div>
      </section>
    </div>
  );
};

export default Home;