import {NavLink} from 'react-router-dom'
import CartWidget from './Carrito/CartWidget'

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light" id="mainNav">
                <div className="container-fluid">
                    <NavLink to="/" className="navbar-brand">
                        <img className="navbar-logo position-logo" src="/assets/img/LOGO REWE.jpg" alt="" height="400px" width="200px" />
                    </NavLink>    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="center navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a className="dropdownStyle dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Categorias
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink to="/category/Ciencia-ficción" className="link-style">
                                        <li className="nav-link active">Ciencia-ficcion</li>
                                    </NavLink>
                                    <NavLink to="/category/Ficción-de-aventuras" className="link-style">
                                        <li className="nav-link">Ficcion de aventuras</li>
                                    </NavLink>
                                    <NavLink to="/category/Comedia" className="link-style">
                                        <li className="nav-link">Comedia</li>
                                    </NavLink>
                                    <NavLink to="/category/Acción" className="link-style">
                                        <li className="nav-link">Accion</li>
                                    </NavLink>
                                    <NavLink to="/category/Suspenso" className="link-style">
                                        <li className="nav-link">Suspenso</li>
                                    </NavLink>
                                    <NavLink to="/category/Ficción-gótica" className="link-style">
                                        <li className="nav-link">Ficcion gotica</li>  
                                    </NavLink>
                                    <NavLink to="/category/Ficción-especulativa" className="link-style">
                                        <li className="nav-link">Ficcion especulativa</li>     
                                    </NavLink>
                                </ul>
                            </li>
                        </ul>
                        <NavLink to="/cart" className="nav-link"><CartWidget/></NavLink>    
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-joyColor" type="submit"><div className="fas fa-search"></div></button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
