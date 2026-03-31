import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { biblioteca } from '../data/Livros';
import './Explorar.css';

const Explorar = () => {
  const [filtro, setFiltro] = useState('Todos');
  const [busca, setBusca] = useState('');

  const livrosFiltrados = biblioteca.filter(livro => {
    const matchCategoria = filtro === 'Todos' || livro.categoria === filtro || (filtro === 'Sci-Fi' && livro.categoria === 'Ficção Científica');
    const matchBusca = livro.titulo.toLowerCase().includes(busca.toLowerCase()) || 
                       livro.autor.toLowerCase().includes(busca.toLowerCase());
    return matchCategoria && matchBusca;
  });

  const categorias = ['Todos', 'Clássicos', 'Fantasia', 'Romance', 'Distopia', 'Psicológico', 'Sci-Fi'];
  
  // Para os destaques, pegamos os 4 primeiros
  const destaques = biblioteca.slice(0, 4);

  return (
    <div className="explorar-container-new">
      {/* Hero Header */}
      <section className="explorar-hero">
        <div className="badge-digital">Acervo Digital Alexandria</div>
        <h1 className="text-highlight">Expanda seus Horizontes Literários</h1>
        <p className="hero-subtitle">
          mergulhe em milhares de histórias. De clássicos atemporais a novos
          mundos inexplorados, sua próxima aventura começa aqui.
        </p>
        
        <div className="search-box-container">
          <input 
            type="text" 
            placeholder="O que você quer buscar hoje ? Busque por título, autor, gênero..." 
            className="search-input-large"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
        
        <div className="hero-chips">
          <span className="chip">+ 5000 Obras</span>
          <span className="chip">+ 20 Gêneros</span>
          <span className="chip">Autores do mundo todo</span>
        </div>
      </section>

      {/* Main Content */}
      <div className="explorar-main-content">
        
        {/* Sidebar */}
        <aside className="explorar-sidebar">
          <div className="sidebar-card">
            <h3>Categorias</h3>
            <hr className="divider" />
            <ul className="categories-list">
              {categorias.map(cat => (
                <li key={cat}>
                  <button 
                    className={`category-item ${filtro === cat ? 'active' : ''}`}
                    onClick={() => setFiltro(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Content Right */}
        <div className="explorar-content-right">
          
          <section className="destaques-semana">
            <h2 className="section-title">Em Destaque essa semana</h2>
            <div className="destaques-grid">
              {destaques.map(livro => (
                <div key={livro.id} className="destaque-card">
                  <img src={livro.capa} alt={livro.titulo} className="destaque-cover" />
                  <div className="destaque-info">
                    <span className="tag-leitura">Top Leitura</span>
                    <h4>{livro.titulo}</h4>
                    <span className="autor">{livro.autor}</span>
                    <p className="sinopse">{livro.sinopse}</p>
                    <Link to={`/livro/${livro.id}`} className="ver-detalhes">Ver detalhes</Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className="explorar-bottom-content">
        <section className="acervo-completo">
           <h2 className="section-title">Explore o Acervo Completo</h2>
           <div className="acervo-grid">
              {livrosFiltrados.map(livro => (
                <Link to={`/livro/${livro.id}`} key={livro.id} className="acervo-book-card">
                  <img src={livro.capa} alt={livro.titulo} />
                  <div className="book-rating">
                    <span style={{ color: '#fbbf24', fontSize: '1.1rem', letterSpacing: '4px' }}>★★★★★</span>
                  </div>
                </Link>
              ))}
           </div>
        </section>
      </div>
    </div>
  );
};

export default Explorar;