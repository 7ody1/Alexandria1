import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Comunidade = () => {
  const [xpWidth, setXpWidth] = useState('0%');

  const atividades = [
    { id: 1, userId: "davi123", user: "Davi", action: "completou o desafio", book: "O Hobbit", time: "2h" },
    { id: 2, userId: "ana_clara", user: "Ana", action: "favoritou", book: "Dom Casmurro", time: "5h" }
  ];

  const topicos = [
    { id: 1, titulo: "Análise técnica: Tradução de '1984'", autor: "Igor", posts: 24 },
    { id: 2, titulo: "Círculo de Leitura: Cronograma Março", autor: "Sara", posts: 12 }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setXpWidth('65%');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="comunidade-page">
      <header className="comunidade-header">
        <div className="header-info">
          <h1>Hub da Comunidade</h1>
          <p>Plataforma de integração e métricas de leitura.</p>
        </div>
        <div className="global-stats">
          <div className="stat-item"><span>12.4k</span><p>Leitores</p></div>
          <div className="stat-item"><span>850</span><p>Ativos Agora</p></div>
        </div>
      </header>

      <div className="comunidade-grid">
        <aside className="left-column">
          <div className="user-card-mini">
            <div className="avatar-large"></div>
            <h3>Davi</h3>
            <p className="user-rank">Nível 15 • Mestre de Obras</p>
            <div className="xp-container">
              <div className="xp-header">
                <span>Progresso de Nível</span>
                <span>65%</span>
              </div>
              <div className="xp-bar">
                <div className="xp-fill" style={{ width: xpWidth }}></div>
              </div>
            </div>
          </div>

          <div className="sidebar-nav">
            <button className="nav-btn active">Feed Geral</button>
            <button className="nav-btn">Círculos</button>
            <button className="nav-btn">Métricas</button>
          </div>
        </aside>

        <main className="main-feed">
          <section className="create-post-v2">
            <input type="text" placeholder="Compartilhe uma citação ou análise..." />
            <div className="post-actions">
              <div className="action-tags">
                <span className="tag-sutil">Anexo</span>
                <span className="tag-sutil">Referência</span>
              </div>
              <button className="btn-send">Publicar</button>
            </div>
          </section>

          <div className="feed-list">
            {atividades.map((act) => (
              <div key={act.id} className="activity-card">
                <div className="card-header">
                  <div className="avatar-sm"></div>
                  <div className="header-text">
                    <Link to={`/perfil/${act.userId}`}><strong>{act.user}</strong></Link>
                    <small>{act.time} atrás</small>
                  </div>
                </div>
                <p className="card-body">
                  {act.action} <span className="highlight">{act.book}</span>
                </p>
                <div className="card-footer">
                  <span className="interact-link">Relevante (12)</span>
                  <span className="interact-link">Comentários (4)</span>
                </div>
              </div>
            ))}
          </div>
        </main>

        <aside className="right-column">
          <div className="interaction-box">
            <h3>Discussões Recentes</h3>
            {topicos.map(t => (
              <div key={t.id} className="topic-item">
                <p>{t.titulo}</p>
                <span className="topic-meta">{t.posts} interações • Por {t.autor}</span>
              </div>
            ))}
          </div>

          <div className="interaction-box ranking">
            <h3>Ranking de Contribuição</h3>
            <div className="rank-row"><span>01</span> Davi</div>
            <div className="rank-row"><span>02</span> Ana</div>
            <div className="rank-row"><span>03</span> Igor</div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Comunidade;