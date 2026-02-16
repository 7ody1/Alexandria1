const Login = () => {
  return (
    <div className="auth-container">
      <div className="auth-card">
        <h1>Entrar</h1>
        <form>
          <input type="email" placeholder="E-mail" />
          <input type="password" placeholder="Senha" />
          <button type="submit" className="btn-primary">Entrar</button>
        </form>
        <p className="auth-link">
          Não tem conta? <a href="/register">Cadastre-se</a>
        </p>
      </div>
    </div>
  );
};

export default Login;