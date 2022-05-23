

import React from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { updateCart } from "../../../Context/CartContext";
const CardSalesList = ({ sales = [] }) => {
    const auth = useSelector((state) => state.auth);
    const list = (
        <Table striped bordered hover responsive="xl">
            <thead>
                <tr>
                    <th>Vendedor</th>
                    <th>Información del producto</th>
                    <th>Oferta</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => <tr key={sale.id} sale={sale}>
                    <td>{sale.vendedor.nombre}</td>
                    <td>Estado:{sale.state}, Lenguaje: {sale.language}, Comentarios: {sale.comments}</td>
                    <td>
                        <select>
                            {getAmount(sale.amount).map(amount => <option key={amount}>{amount+1}</option>)}
                        </select>
                    </td>
                    <td>{sale.price}€</td>
                    <td>
                        {buttonbuy(auth, sale)}
                    </td>
                </tr>)}
            </tbody>
        </Table>
    );

    function buttonbuy(auth, sale) {
        const buyButton = (
            <button onClick={updateCart(sale)}>Comprar</button>
        );
        const loginToBuy = (
            <div>
                <p>Para comprar debes estar logueado</p>
                <Link to="/login"><button>Login</button></Link>

            </div>
        );
        return (auth.isLoggedIn ? buyButton : loginToBuy)
    }

    const noresult = (
        <Table striped bordered hover responsive="xl">
            <thead>
                <tr>
                    <th>Vendedor</th>
                    <th>Información del producto</th>
                    <th>Oferta</th>
                    <th>Precio</th>
                </tr>
            </thead>
            No hay ofertas
        </Table>
    );

    function getAmount(amount) {
        const amountArray = [];
        for (let i = 0; i < amount; i++) {
            amountArray.push(i);
        }
        return amountArray;
    }
    return sales.length > 0 ? list : noresult;
}

export default CardSalesList;