import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">Alexandria</div>
      
      <nav className="main-nav">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/explorar" className="nav-link">Explorar</Link>
        <Link to="/comunidade" className="nav-link">Comunidade</Link>
      </nav>

      <div className="header-tools">
        <div className="search-bar">
          <input type="text" placeholder="Buscar livros..." />
        </div>
        <Link to="/login" className="btn-login">Entrar</Link>
      </div>
    </header>
  );
};

export default Header;