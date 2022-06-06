import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const SellerListItem = (props) => {
    const { seller } = props;
    const [totalVentas, setTotalVentas] = useState(0);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventasTotalesSinComprar/username=${seller.username}`)
            .then((response) => response.json())
            .then((totalVentas) => setTotalVentas(totalVentas))
    }
        , []);

    return (
        <>
            <tr>
                <td>
                    <Link to={`/sellers/${seller.id}`}>
                        {seller.username}
                    </Link>
                </td>
                <td>{seller.registerdate}</td>
                <td>{totalVentas}</td>
            </tr>
        </>
    );
};

export default SellerListItem;