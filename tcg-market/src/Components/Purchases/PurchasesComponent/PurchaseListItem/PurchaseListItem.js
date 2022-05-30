import {  Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const PurchaseListItem = (props) => {
    const { purchase, user } = props;
    console.log(purchase.id, user);
    const [ventasCompra, setVentasCompra] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/${purchase.id}`)
            .then(response => response.json())
            .then(ventasCompra => setVentasCompra(ventasCompra))
    }, []);
    function totalPrice() {
        let total = 0;
        ventasCompra.forEach(venta => {
            total += venta.price;
        });
        console.log(total);
        return total;
    }
    return (
        <>
            <tr>
                <td>{totalPrice}</td>
                <td>{purchase.paymentdate}</td>
                <td>{purchase.shipmentdate}</td>
                <td>{purchase.confirmationdate}</td>
                <td>
                    <Link to={`/purchases/${user}/purchaseId=${purchase.id}`}>
                        <span>Detalles</span>
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default PurchaseListItem;