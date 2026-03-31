import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { biblioteca } from '../data/Livros';
import '../App.css';

const Home = () => {
  const navigate = useNavigate();

  const destaques = biblioteca.slice(0, 5);
  const lancamentos = biblioteca.slice(5, 10);
  const sugeridos = biblioteca.sort(() => 0.5 - Math.random()).slice(0, 5);
  const leituraDoDia = biblioteca[0]; // Exemplo de livro em destaque central

  const carousel1Ref = useRef(null);
  const carousel2Ref = useRef(null);

  const scrollCarousel = (ref, offset) => {
    if (ref && ref.current) {
      ref.current.scrollBy({ left: offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="home-container">

      {/* Hero Section Refinada */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge">Explore o Inexplorado</div>
          <h1 className="hero-title">
            <span className="gradient-text">Sua Biblioteca Digital</span> <br />
            & Ecossistema Literário
          </h1>
          <p className="hero-subtitle">
            Onde as páginas ganham vida. Organize sua coleção pessoal,
            mergulhe em resenhas críticas e conecte-se com uma mente coletiva de leitores apaixonados.
          </p>

          <div className="hero-actions">
            <button className="btn-primary" onClick={() => navigate('/login')}>
              Cadastrar
            </button>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="stat-item">
          <span className="stat-value">12k+</span>
          <span className="stat-label">Obras Curadas</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">5k+</span>
          <span className="stat-label">Exploradores</span>
        </div>
        <div className="stat-item">
          <span className="stat-value">24h</span>
          <span className="stat-label">Comunidade Viva</span>
        </div>
      </section>

      {/* Seção 1: Destaques */}
      <section className="section">
        <div className="section-header">
          <h2>Tendências da Semana</h2>
          <span className="view-all" onClick={() => navigate('/explorar')}>Explorar Mais</span>
        </div>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={() => scrollCarousel(carousel1Ref, -300)}>&#10094;</button>
          <div className="carousel" ref={carousel1Ref}>
            {destaques.map((livro) => (
              <div className="book-item" key={livro.id} onClick={() => navigate(`/livro/${livro.id}`)}>
                <div className="book-card-inner">
                  <img src={livro.capa} alt={livro.titulo} className="book-cover" />
                  <div className="book-info">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.autor}</p>
                    <span className="category-tag">{livro.categoria}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => scrollCarousel(carousel1Ref, 300)}>&#10095;</button>
        </div>
      </section>

      {/* Seção 2: Gêneros Populares (Conteúdo Extra) */}
      <section className="section bg-dark">
        <div className="section-header">
          <h2>Navegue por Categoria</h2>
        </div>
        <div className="genres-grid">
          {['Ficção', 'Tecnologia', 'História', 'Filosofia', 'Mistério', 'Clássicos'].map((genre) => (
            <div className="genre-card" key={genre}>
              <span className="genre-icon">{genre === 'Tecnologia' ? '💻' : '📖'}</span>
              <h4>{genre}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* Seção 3: Leitura em Destaque (Daily Feature) */}
      <section className="section">
        <div className="daily-feature">
          <img src={leituraDoDia?.capa} alt="Livro do dia" className="daily-img" />
          <div className="daily-content">
            <h3>Sugestão do Curador</h3>
            <h2 className="hero-title" style={{ fontSize: '2.5rem' }}>{leituraDoDia?.titulo}</h2>
            <p className="hero-subtitle" style={{ margin: '10px 0 30px', textAlign: 'left' }}>
              Uma obra fundamental que redefine o gênero. Mergulhe nesta narrativa envolvente que tem conquistado os leitores da Alexandria este mês.
            </p>
            <button className="btn-primary" onClick={() => navigate(`/livro/${leituraDoDia?.id}`)}>
              Ler Resenhas
            </button>
          </div>
        </div>
      </section>

      {/* Seção 4: Novos no Acervo */}
      <section className="section">
        <div className="section-header">
          <h2>Recém Adicionados</h2>
        </div>
        <div className="carousel-container">
          <button className="carousel-btn prev" onClick={() => scrollCarousel(carousel2Ref, -300)}>&#10094;</button>
          <div className="carousel" ref={carousel2Ref}>
            {lancamentos.map((livro) => (
              <div className="book-item" key={livro.id} onClick={() => navigate(`/livro/${livro.id}`)}>
                <div className="book-card-inner">
                  <img src={livro.capa} alt={livro.titulo} className="book-cover" />
                  <div className="book-info">
                    <h3>{livro.titulo}</h3>
                    <p>{livro.autor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-btn next" onClick={() => scrollCarousel(carousel2Ref, 300)}>&#10095;</button>
        </div>
      </section>

      {/* CTA Final Reforçado */}
      <section className="cta-banner">
        <div className="cta-content">
          <h2>A sua próxima grande história começa aqui.</h2>
          <p>Crie sua conta hoje e ganhe acesso a listas exclusivas e recomendações personalizadas por IA.</p>
          <button className="btn-primary large" onClick={() => navigate('/login')}>
            Começar Gratuitamente
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;