import React from "react";
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faSignOutAlt, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../../Services/index";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css';

const Header = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser());
    };

    const username = localStorage.getItem("username");
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
                <Link to={"/shoppingCart"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon icon={faCartShopping} className="font-link nav-link mr-2 icon" />
                    <h2 className="font-link col-md-6">Carrito</h2>
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
                    {/* <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic">
                            Vender
                        </Dropdown.Toggle>
        
                        <Dropdown.Menu>
                            <Link to={`/sales/${username}/`}>
                                <Dropdown.Item>Tus ofertas</Dropdown.Item>
                            </Link>
                        </Dropdown.Menu>
                    </Dropdown> */}
                    <li className="nav-item">
                        <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Vender</a>
                        <div className="dropdown-menu">

                            <Link to={`/sales/${username}`}>
                                <span className="font-link dropdown-item">Tus ofertas</span>
                            </Link>
                            <span className="font-link dropdown-item">Crear ofertas</span>
                        </div>
                    </li>
                    <li className="nav-item">
                        <a className="font-link nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Comprar</a>
                        <div className="dropdown-menu">
                            <Link to={`/purchases/${username}/`}>
                                <span className="font-link dropdown-item">Tus compras</span>
                            </Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link to="/shoppingCart">
                            <a className="nav-link">Carrito</a>
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