import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faSignOutAlt, faCartShopping, faPerson } from "@fortawesome/free-solid-svg-icons";
import { logoutUser, parseJwt } from "../../Services/index";
import { useState, useEffect } from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';

const Header = (props) => {
    const { username, cartLength } = props;
    const auth = useSelector((state) => state.auth);
    console.log(username);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser());
    };
    const [usuario, setUsuario] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${username}`)
            .then((response) => response.json())
            .then((usuario) => setUsuario(usuario))
    }, []);
    const guestLinks = (
        <>
            <Nav className="font-link navbar-right row registerLogin">

                <Link to={"/signup"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon className="nav-link p-1" width="50px" height="50px" icon={faUserPlus} />
                    <h2 className="font-link col-6-md">Registrate</h2>
                </Link>
            </Nav>
            <Nav className="registerLogin navbar-right">
                <Link to={"/login"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon icon={faSignInAlt} className="font-link nav-link mr-2 icon" />
                    <h2 className="font-link col-md-6">Login</h2>
                </Link>
            </Nav>
            <Nav>
                <Link to={`/sellers`}>
                    <FontAwesomeIcon icon={faPerson} className="font-link nav-link mr-2 icon" />
                    <h2 className="font-link col-md-6">Vendedores</h2>
                </Link>
            </Nav>
            <Nav>
                <Link to={"/shoppingCart"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon icon={faCartShopping} className="font-link nav-link mr-2 icon" />
                    <h2 className="font-link col-md-6">Carrito <span>({cartLength})</span></h2>
                </Link>
            </Nav>
        </>
    );
    const userLinks = (
        <>
            <div className="collapse navbar-collapse p-0" id="navbarColor02">
                <ul className="navbar-nav me-auto">
                    <li className="nav-item dropdown" title={username}>
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cuenta</a>
                        <div className="dropdown-menu">

                            <Link to={`/account/${username}`}>
                                <a className="font-link dropdown-item">Cuenta</a>
                            </Link>
                            <Link to={`/favorites/${username}`}>
                                <a className="font-link dropdown-item">Favoritos</a>
                            </Link>
                            <a className="font-link dropdown-item" href="#">Mensajes</a>
                            <div className="dropdown-divider"></div>
                            <Link to={"/logout"} className="nav-link d-flex justify-content-between" onClick={logout}>
                                <a className="font-link dropdown-item" href="#">Cerrar sesión</a>
                            </Link>

                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#test1" aria-controls="test1" role="button" aria-haspopup="true" aria-expanded="false">Vender</a>
                        <div className="dropdown-menu" id="test1">
                            <Link to={`/sales/${username}`}>
                                <span className="font-link dropdown-item">Tus ofertas</span>
                            </Link>
                            <Link to={`/sales/${usuario.username}/${usuario.id}/add`}>
                                <span className="font-link dropdown-item">Crear ofertas</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="font-link nav-link dropdown-toggle" data-bs-toggle="collapse" data-bs-target="#test2" role="button" aria-haspopup="true" aria-expanded="false">Comprar</a>
                        <div className="dropdown-menu" id="test2">
                            <Link to={`/purchases/${username}/`}>
                                <span className="font-link dropdown-item">Tus compras</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to={`/sellers`}>
                            <span className="font-link nav-link">Vendedores</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/shoppingCart">
                            <a className="nav-link">Carrito <span>({cartLength})</span></a>
                        </Link>

                    </li>
                </ul>
            </div>
        </>
    );
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg p-0">
                    <div className="container-fluid">
                        <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
                            <h1 className="font-link tcgMarket">TCG Market!</h1>
                        </Link>
                        {auth.isLoggedIn ? userLinks : guestLinks}

                    </div>
                </nav>
            </header >
            <SearchBar />
        </>
    );
};

export default Header;