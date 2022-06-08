import { Table, Breadcrumb } from "react-bootstrap";
import SellerList from "./SellerComponents/SellerList";
import { useEffect, useState } from 'react';
import { Link, useParams } from "react-router-dom";

const Seller = (props) => {
    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/vendedores`)
            .then((response) => response.json())
            .then((sellers) => setSellers(sellers))
    }, []);

    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 p-5">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={"/home"}>
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item>
                                <Link to={`/sellers`}>
                                    Vendedores
                                </Link>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <div className="card">
                                    <div className="card-header">
                                        <h1>Vendedores</h1>
                                    </div>
                                    <div className="card-body m-3">
                                        <Table striped bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>Nombre de usuario</th>
                                                    <th>Fecha de registro</th>
                                                    <th>Ventas listadas</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <SellerList sellers={sellers}/>
                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Seller;