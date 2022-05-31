

import React from "react";
import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
const CardSalesList = (props) => {
    const { onAdd, sales, modifySales, cartItems } = props;
    const [actualAmount, setActualAmount] = useState("");
    const auth = useSelector((state) => state.auth);
    
    const list = (
        <Table striped bordered hover responsive="xl" className="pt-3">
            <thead>
                <tr>
                    <th className="font-link">Vendedor</th>
                    <th className="font-link">Información del producto</th>
                    <th className="font-link">Oferta</th>
                    <th className="font-link">Precio</th>
                </tr>
            </thead>
            <tbody>
                {sales.map(sale => <tr key={sale.id}>
                    <td className="font-link">{sale.vendedor.username}</td>
                    <td className="font-link">Estado:{sale.state}, Lenguaje: {sale.language}, Comentarios: {sale.comments}</td>
                    <td className="font-link">
                        {sale.amount}
                        {/* <select class="form-select" aria-label="Elige tu forma de envio">
                            {getAmount(sale.amount).map((amount) =>
                                <option key={amount} value={amount} onClick={() => setActualAmount(amount)}>{amount}</option>
                            )}
                        </select> */}
                    </td>
                    <td className="font-link">{sale.price}€</td>
                    <td className="font-link">
                        <Link to="/shoppingCart">
                            <button onClick={() => addToCartandModify(sales, sale)}>Comprar</button>
                        </Link>

                    </td>
                </tr>)}
            </tbody>
        </Table>
    );

   function addToCartandModify(actualSales, actualSale) {
        actualSales.map(sale => {
            if (sale.id === actualSale.id) {
                actualSales.splice(actualSales.indexOf(sale), 1);
            }});
            onAdd(actualSale);
    }
        

    const noresult = (
        <h1 className="font-link pt-3">No hay resultados</h1>
    );
    return sales.length > 0 ? list : noresult;
}

export default CardSalesList;