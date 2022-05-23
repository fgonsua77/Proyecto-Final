import React from "react";
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../../Services/index";
import { DropdownButton, Dropdown } from "react-bootstrap";
import './Header.css';

const Header = () => {
    const auth = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const logout = () => {
        dispatch(logoutUser());
    };
    const user = localStorage.getItem("user");

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
        </>
    );
    const userLinks = (
        <>
            <div class="collapse navbar-collapse" id="navbarColor02">
                <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown" title={user.username}>
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Cuenta</a>
                        <div class="dropdown-menu">
                            
                            <Link to={"/account"}>
                                <a class="dropdown-item">Cuenta</a>
                            </Link>
                            <a class="dropdown-item" href="#">Mensajes</a>
                            <div class="dropdown-divider"></div>
                            <Link to={"/logout"} className="nav-link d-flex justify-content-between" onClick={logout}>
                                <a class="dropdown-item" href="#">Cerrar sesión</a>
                            </Link>

                        </div>
                    </li>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio
                            <span class="visually-hidden">(current)</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Vender</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Comprar</a>
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
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                    <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
                        <h1 class="tcgMarket">TCG Market!</h1>
                    </Link>
                    {auth.isLoggedIn ? userLinks : guestLinks}

                </div>
            </nav>
            
        </header >
    );
};

export default Header;