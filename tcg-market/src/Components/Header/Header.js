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
            <Nav className="navbar-right row" class="registerLogin">

                <Link to={"/signup"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon className="nav-link p-1" width="50px" height="50px" icon={faUserPlus} />
                    <h2 className="col-6-md">Registrate</h2>
                </Link>
            </Nav>
            <Nav className="registerLogin navbar-right">
                <Link to={"/login"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon icon={faSignInAlt} className="nav-link mr-2" class="icon" />
                    <h2 className="col-md-6">Login</h2>
                </Link>
            </Nav>
            <Nav>
                <Link to={"/shoppingCart"} className="nav-link d-flex col align-items-center">
                    <FontAwesomeIcon icon={faCartShopping} className="nav-link mr-2" class="icon" />
                    <h2 className="col-md-6">Carrito</h2>
                </Link>
            </Nav>
        </>
    );
    const userLinks = (
        <>
            <div class="collapse navbar-collapse p-0" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown" title={username}>
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cuenta</a>
                        <div class="dropdown-menu">

                            <Link to={`/account/${username}`}>
                                <a class="dropdown-item">Cuenta</a>
                            </Link>
                            <Link to={`/favorites/${username}`}>
                                <a class="dropdown-item">Favoritos</a>
                            </Link>
                            <a class="dropdown-item" href="#">Mensajes</a>
                            <div class="dropdown-divider"></div>
                            <Link to={"/logout"} className="nav-link d-flex justify-content-between" onClick={logout}>
                                <a class="dropdown-item" href="#">Cerrar sesión</a>
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
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Vender</a>
                        <div class="dropdown-menu">

                            <Link to={`/sales/${username}`}>
                                <span class="dropdown-item">Tus ofertas</span>
                            </Link>
                            <span class="dropdown-item">Crear ofertas</span>
                        </div>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Comprar</a>
                        <div class="dropdown-menu">
                            <Link to={`/purchases/${username}/`}>
                                <span class="dropdown-item">Tus compras</span>
                            </Link>
                        </div>
                    </li>
                    <li class="nav-item">
                        <Link to="/shoppingCart">
                            <a class="nav-link">Carrito</a>
                        </Link>

                    </li>
                </ul>
            </div>
        </>
    );
    return (
        <>
            <header>
                <nav class="navbar navbar-expand-lg p-0">
                    <div class="container-fluid">
                        <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
                            <h1 class="tcgMarket">TCG Market!</h1>
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