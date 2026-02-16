import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">ALEXANDRIA</div>
      
      <nav className="main-nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/explorar" className="nav-link">Explorar</NavLink>
        <NavLink to="/comunidade" className="nav-link">Comunidade</NavLink>
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