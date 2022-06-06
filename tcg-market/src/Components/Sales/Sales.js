import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams, useHistory } from "react-router-dom";
import { Breadcrumb, Button } from "react-bootstrap";
import SalesList from "./SalesComponents/SalesList/SalesList";
import SalesContext from "../../Context/SalesContext";

const Sales = (props) => {
    const {username} = useParams();
    const [ventasUsuario, setVentasUsuario] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventasSinComprar/username=${username}`)
            .then(response => response.json())
            .then(ventasUsuario => setVentasUsuario(ventasUsuario))
    }, []);
    const [usuario, setUsuario] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${username}`)
            .then((response) => response.json())
            .then((usuario) => setUsuario(usuario))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item className="font-link">
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                    {username}
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                Ventas
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className="container">

                <div className="row">
                    <div className="col-12 p-5">
                        <SalesList ventasUsuario={ventasUsuario} username={username} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Link to={`/sales/${usuario.username}/${usuario.id}/add`}>
                            <Button className="font-link" variant="primary">Crear una nueva venta</Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Sales;