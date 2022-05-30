import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import SalesList from "./SalesComponents/SalesList/SalesList";
import SalesContext from "../../Context/SalesContext";

const Sales = (props) => {
    const { user } = useParams();
    const { userId } = props;
    console.log(userId, user);
    const [ventasUsuario, setVentasUsuario] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/userId=${userId}`)
            .then(response => response.json())
            .then(ventasUsuario => setVentasUsuario(ventasUsuario))
    }, []);
    console.log(ventasUsuario);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item >
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                {user}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                Ventas
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <SalesList ventasUsuario={ventasUsuario} user={user} />
                    </div>
                </div>
            </div>
        </>
    );
};


export default Sales;