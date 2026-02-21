import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { biblioteca } from '../data/Livros';

const Explorar = () => {
  const [filtro, setFiltro] = useState('Todos');

  const livrosFiltrados = filtro === 'Todos' 
    ? biblioteca 
    : biblioteca.filter(livro => livro.categoria === filtro);

  const categorias = ['Todos', 'Clássicos', 'Fantasia', 'Romance', 'Distopia'];

  return (
    <div className="explorar-page">
      <section className="page-title">
        <h1>Explore o Acervo</h1>
        <p>Encontre sua próxima leitura em gêneros e recomendações.</p>
      </section>

      <section className="filter-section">
        {categorias.map(cat => (
          <button 
            key={cat}
            className={`filter-btn ${filtro === cat ? 'active' : ''}`}
            onClick={() => setFiltro(cat)}
          >
            {cat}
          </button>
        ))}
      </section>

      <section className="results-grid">
        {livrosFiltrados.map((livro) => (
          <Link to={`/livro/${livro.id}`} key={livro.id} className="book-card">
            <div className="book-card-inner">
              <img src={livro.capa} alt={livro.titulo} className="book-cover" />
              <div className="book-card-info">
                <h3>{livro.titulo}</h3>
                <p>{livro.autor}</p>
              </div>
            </div>
          </Link>
        ))}
      </section>
    </div>
  );
};

export default Explorar;