import {  Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const PurchaseListItem = (props) => {
    const { purchase, user } = props;
    const [ventasCompra, setVentasCompra] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/${purchase.id}`)
            .then(response => response.json())
            .then(ventasCompra => setVentasCompra(ventasCompra))
    }, []);
    return (
        <>
            <tr>
                <td className="font-link">{purchase.paymentdate}</td>
                <td className="font-link">{purchase.shipmentdate}</td>
                <td className="font-link">{purchase.confirmationdate}</td>
                <td>
                    <Link to={`/purchases/${user.username}/purchaseId=${purchase.id}`}>
                        <span className="font-link">Detalles</span>
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default PurchaseListItem;