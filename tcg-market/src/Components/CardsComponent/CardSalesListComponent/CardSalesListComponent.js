

import React from "react";
import { Table, Button } from 'react-bootstrap';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useState } from "react";
import Swal from 'sweetalert2';
const CardSalesList = (props) => {
    const { onAdd, sales, cartItems } = props;
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
                    <td className="font-link"> <Link to={`/sellers/${sale.vendedor.id}`}>{sale.vendedor.username}</Link></td>
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
                            <Button onClick={() => addToCart(sale)}>Comprar</Button>

                    </td>
                </tr>)}
            </tbody>
        </Table>
    );

    function addToCart(actualSale) {
        const exist = cartItems.find((x) => x.id === actualSale.id);
        if(exist){
            Swal.fire(
                'Esta venta ya esta en tu carrito!',
                'No puedes repetir ventas',
                'error'
              )
        }else{
            Swal.fire(
                'Se ha añadido la venta con exito',
                'Siga comprando!',
                'success'
              )
            onAdd(actualSale); 
        }

    }


    const noresult = (
        <h1 className="font-link pt-3">No hay resultados</h1>
    );
    return sales.length > 0 ? list : noresult;
}

export default CardSalesList;