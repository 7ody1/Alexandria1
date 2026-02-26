import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/explorar');
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <header className="login-header">
          <h1>Alexandria</h1>
          <p>Autenticação de Acesso</p>
        </header>

        <form onSubmit={handleLogin} className="login-form">
          <div className="input-group">
            <label>Identificador de Acesso</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Chave de Segurança</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="btn-login-submit">
           Entrar
          </button>
        </form>

        <footer className="login-footer">
          <p>Não possui Conta? <span> Cadastrar</span></p>
        </footer>
      </div>
    </div>
  );
};

export default Login;