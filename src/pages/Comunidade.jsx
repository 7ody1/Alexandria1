import React, { useState, useEffect } from 'react';
import './Comunidade.css';

const Comunidade = () => {
  const [xpWidth, setXpWidth] = useState('0%');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setXpWidth('65%');
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="comunidade-container-new">
      <div className="comunidade-content-wrapper">
      
      {/* Header Section */}
      <header className="comunidade-header-new">
        <div className="header-info-new">
          <h1>Hub da Comunidade</h1>
          <p>Plataforma de integração e métricas de leitura</p>
        </div>
        <div className="header-stats-new">
          <div className="stat-block">
            <span className="stat-number">12.4K</span>
            <span className="stat-label">Leitores</span>
          </div>
          <div className="stat-block">
            <span className="stat-number">850</span>
            <span className="stat-label">Ativos agora</span>
          </div>
        </div>
      </header>
      <hr className="header-divider" />

      {/* Ranking de Contribuição */}
      <section className="comunidade-section">
        <h2 className="section-title-new">Ranking de Contribuição</h2>
        <div className="ranking-bar-card">
          <div className="ranking-item">
            <div className="ranking-orb"></div>
            <div className="ranking-info">
              <span className="ranking-pos">01 posição</span>
              <span className="ranking-name">Davi - 2450 XP</span>
            </div>
          </div>
          <div className="ranking-item">
            <div className="ranking-orb"></div>
            <div className="ranking-info">
              <span className="ranking-pos">02 posição</span>
              <span className="ranking-name">Roberto - 2100 XP</span>
            </div>
          </div>
          <div className="ranking-item">
            <div className="ranking-orb"></div>
            <div className="ranking-info">
              <span className="ranking-pos">03 posição</span>
              <span className="ranking-name">Mariana - 1850 XP</span>
            </div>
          </div>
        </div>
      </section>
      <hr className="header-divider" />

      {/* User & Post Actions */}
      <section className="user-action-grid">
        <div className="user-profile-card">
          <div className="user-avatar-orb"></div>
          <h3>Davi</h3>
          <p className="user-level">Nível 15 - Mestre de obras</p>
          <div className="xp-bar-wrapper">
             <div className="xp-labels">
               <span>Progresso de nível</span>
               <span>65%</span>
             </div>
             <div className="xp-track">
               <div className="xp-fill" style={{ width: xpWidth }}></div>
             </div>
          </div>
        </div>
        
        <div className="create-post-card">
          <div className="post-input-wrapper">
            <input type="text" placeholder="Compartilhe uma citação ou análise" />
          </div>
          <div className="post-actions-row">
            <div className="left-actions">
               <button className="btn-grey">Anexo</button>
               <button className="btn-grey">Referência</button>
            </div>
            <button className="btn-mint">Publicar</button>
          </div>
        </div>
      </section>

      {/* Atividades */}
      <section className="comunidade-section">
         <h2 className="section-title-new">Atividades</h2>
         <div className="activities-list">
            <div className="activity-card-new">
              <div className="activity-header">
                <div className="activity-orb"></div>
                <div className="activity-user-info">
                  <span className="activity-name">Davi</span>
                  <span className="activity-time">2 Horas Atrás</span>
                </div>
              </div>
              <p className="activity-text">
                completou o livro <span className="highlight-text">O Hobbit</span>
              </p>
              <div className="activity-footer">
                 <span>Relevante (12) v</span>
                 <span>Comentários (4) v</span>
              </div>
            </div>

            <div className="activity-card-new">
              <div className="activity-header">
                <div className="activity-orb"></div>
                <div className="activity-user-info">
                  <span className="activity-name">Ana</span>
                  <span className="activity-time">5 Horas Atrás</span>
                </div>
              </div>
              <p className="activity-text">
                Favoritou <span className="highlight-text">Dom Casmurro</span>
              </p>
              <div className="activity-footer">
                 <span>Relevante (12) v</span>
                 <span>Comentários (4) v</span>
              </div>
            </div>
         </div>
      </section>

      {/* Discussões Frequentes */}
      <section className="comunidade-section">
         <h2 className="section-title-new">Discussões Frequentes</h2>
         <div className="discussions-card">
            <div className="discussion-item">
               <h4>Análise teórica : Tradução de 1984</h4>
               <span className="author-link">Por Igor</span>
               <span className="interaction-count">24 interações</span>
            </div>
            <hr className="inner-divider" />
            <div className="discussion-item">
               <h4>Círculo de leitura: Cronograma Março</h4>
               <span className="author-link">Por Sarah</span>
               <span className="interaction-count">12 interações</span>
            </div>
         </div>
      </section>

      </div>
    </div>
  );
};

export default Comunidade;