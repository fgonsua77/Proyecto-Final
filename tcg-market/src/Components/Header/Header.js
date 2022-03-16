import React from "react";
import { cartContext } from '../../Context/CartContext';
import { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faSignInAlt, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { logoutUser } from "../../Services/index";

const Header = () => {
const auth = useSelector((state) => state.auth);
const dispatch = useDispatch();
const cont = useContext(cartContext);
const logout = () => {
    dispatch(logoutUser());
};

const guestLinks = (
    <>
    <div className="mr-auto"></div>
    <Nav className="navbar-right">
        <Link to={"/signup"} className="nav-link d-flex justify-content-between">
        <FontAwesomeIcon className="nav-link d-flex justify-content-center" width="30" height="24" icon={faUserPlus} /><h2>Registrate</h2>
        </Link>
        <Link to={"/login"} className="nav-link d-flex justify-content-between">
        <FontAwesomeIcon icon={faSignInAlt} className="nav-link d-flex justify-content-center"  /><h2>Login</h2>
        </Link>
    </Nav>
    </>
);
const userLinks = (
    <>
    
    <Navbar className="d-flex justify-content-start">
        <Nav className="mr-auto">
            <Link to={"/cards"} className="nav-link d-flex justify-content-between">
            <h2>Lista de Productos</h2>
            </Link>
        </Nav>
        <Nav className="navbar-right">
            <Link to={"/logout"} className="nav-link d-flex justify-content-between" onClick={logout}>
            <FontAwesomeIcon icon={faSignOutAlt} /> <h2>Cerrar sesión</h2>
            </Link>
        </Nav>
    </Navbar>
    <Nav>
    <Link to="/shoppingCart" className='nav-link'>
        <div className='position-relative btn btn-outline-dark'>Carrito<i className='fas fa-cart'></i> { cont.cart.length > 0 && <div className="position-absolute top-25 start-100 translate-middle badge rounded-pill bg-danger">{cont.cart.length}</div>}</div></Link>
    </Nav>
    </>
);

return (
    <header>
        <Navbar>
            <Link to={auth.isLoggedIn ? "home" : ""} className="navbar-brand">
                <h1>TCG Market!</h1>
            </Link>
        {auth.isLoggedIn ? userLinks : guestLinks}
        </Navbar>
    </header>
);
};

export default Header;