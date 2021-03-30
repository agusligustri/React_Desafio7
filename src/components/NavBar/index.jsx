import CartWidget from '../CartWidget';
import './navbar.component.scss';
import { Link } from "react-router-dom"; //as lo Renombra

const NavBar = () => {
    return (
      <>
        <header className="header-area overlay">
            <nav className="navbar navbar-expand-md navbar-dark">
                <div className="container">
                    <Link to='/'><img src="./images/general/logo.png" className="navbar-logo" alt="scott_logo"></img></Link>
                    <button type="button" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#main-nav">
                        <span className="menu-icon-bar"></span>
                        <span className="menu-icon-bar"></span>
                        <span className="menu-icon-bar"></span>
                    </button>
                    <div id="main-nav" className="collapse navbar-collapse">
                        <ul className="navbar-nav ml-auto">
                            <li><Link to='/' className="nav-item nav-link" activeClassName="active">Inicio</Link></li>
                            <li><Link to='/category/bicicletas' className="nav-item nav-link" activeClassName="active">Bicicletas</Link></li>
                            <li><Link to='/category/accesorios' className="nav-item nav-link" activeClassName="active">Accesorios</Link></li>
                            <li><Link to='/category/indumentaria' className="nav-item nav-link" activeClassName="active">Indumentaria</Link></li>
                            <li><Link to='/contacto' className="nav-item nav-link" activeClassName="active">Contacto</Link></li>
                            <CartWidget />
                        </ul>
                    </div>
                </div>
            </nav>
        </header> 
      </>
    );
  }

  export default NavBar;