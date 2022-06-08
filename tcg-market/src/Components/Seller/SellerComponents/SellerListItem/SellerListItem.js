import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SellerListItem = (props) => {
    const { seller } = props;
    const [totalVentasSinComprar, setTotalVentasSinComprar] = useState(0);
    const [totalVentasCompradas, setTotalVentasCompradas] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventasTotalesSinComprar/username=${seller.username}`)
            .then((response) => response.json())
            .then((totalVentasSinComprar) => setTotalVentasSinComprar(totalVentasSinComprar))
    }
        , []);

    return (
        <>
            <tr>
                <td>
                    <Link to={`/sellers/${seller.id}/${seller.username}`}>
                        {seller.username}
                    </Link>
                </td>
                <td>{seller.registerdate}</td>
                <td>{totalVentasSinComprar}</td>
            </tr>
        </>
    );
};

export default SellerListItem;