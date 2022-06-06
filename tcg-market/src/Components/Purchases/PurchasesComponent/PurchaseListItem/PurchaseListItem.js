import {  Link } from "react-router-dom";
import { useEffect, useState } from 'react';
const PurchaseListItem = (props) => {
    const { purchase, username } = props;
    return (
        <>
            <tr>
                <td className="font-link">{purchase.paymentdate}</td>
                <td className="font-link">{purchase.shipmentdate}</td>
                <td className="font-link">{purchase.confirmationdate}</td>
                <td>
                    <Link to={`/purchases/${username}/purchaseId=${purchase.id}`}>
                        <span className="font-link">Detalles</span>
                    </Link>
                </td>
            </tr>
        </>
    );
}

export default PurchaseListItem;