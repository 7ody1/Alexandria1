import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const navigate = useNavigate();

  const handleCadastro = (e) => {
    e.preventDefault();
    if (senha !== confirmaSenha) {
      alert('As senhas não coincidem!');
      return;
    }
    navigate('/explorar'); // Redireciona para o catálogo após o cadastro
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-header">
          <h1>Alexandria</h1>
          <p>Criação de Conta</p>
        </header>

        <form onSubmit={handleCadastro} className="login-form">
          <div className="input-group">
            <label>Nome Completo</label>
            <input 
              type="text" 
              placeholder="Seu nome" 
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Confirmar Senha</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={confirmaSenha}
              onChange={(e) => setConfirmaSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login-submit">
           Cadastrar
          </button>
        </form>

        <footer className="login-footer">
          <p>Já possui uma conta? <span onClick={() => navigate('/login')} style={{cursor: 'pointer'}}>Entrar</span></p>
        </footer>
      </div>
    </div>
  );
};

export default Cadastro;
