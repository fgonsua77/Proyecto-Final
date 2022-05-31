import { useEffect, useState } from "react";
import PurchaseListItem from "../PurchaseListItem/PurchaseListItem";

const PurchaseList = (props) => {
    const { purchases, user } = props;
    console.log(purchases);
    const [loading, setLoading] = useState(false);

    return (
        
            <div className="table table-bordered table-striped" >
                <thead>
                    <tr>
                        <th>
                            <span className="font-link">Vendedor</span>
                        </th>
                        <th>
                            <span className="font-link">Productos</span>
                        </th>
                        <th>
                            <span className="font-link">Precio</span>
                        </th>
                        <th>
                            <span className="font-link">Gastos de envio</span>
                        </th>
                        <th>
                            <span className="font-link">Fecha de confirmación</span>
                        </th>
                        <th>
                            <span className="font-link">Fecha de pago</span>
                        </th>
                        <th>
                            <span className="font-link">Fecha de envio</span>
                        </th>
                        <th>
                            <span className="font-link">Evaluación</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {purchases.map(purchase => (
                        <PurchaseListItem key={purchase.id} purchase={purchase} user={user} />
                    ))}
                </tbody>

            </div>
    );
}


export default PurchaseList;