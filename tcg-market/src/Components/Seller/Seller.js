import { Table } from "react-bootstrap";
import SellerList from "./SellerComponents/SellerList";
import {useEffect, useState} from 'react';

const Seller = (props) => {

    const [sellers, setSellers] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/vendedores`)
            .then((response) => response.json())
            .then((sellers) => setSellers(sellers))
    }, []);

    return (
        <>
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
                                <th>Ventas completadas</th>
                            </tr>
                        </thead>
                        <tbody>
                           <SellerList sellers={sellers} />
                        </tbody>
                    </Table>
                </div>
            </div>
    </> 
    );                        
};

export default Seller;