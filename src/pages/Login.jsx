import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/common/Button';
import InputField from '../components/common/InputField';

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
            <label>Email</label>
            <input 
              type="email" 
              placeholder="seu@email.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <InputField 
            label="Senha"
            type="password" 
            placeholder="••••••••" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
          />

          <Button 
            type="submit" 
            variant="primary" 
          >
            Entrar
          </Button>
        </form>

        <footer className="login-footer">
          <p>Não possui Conta? <span onClick={() => navigate('/cadastro')} style={{cursor: 'pointer'}}>Cadastrar</span></p>
        </footer>
      </div>
    </div>
  );
};

export default Login;