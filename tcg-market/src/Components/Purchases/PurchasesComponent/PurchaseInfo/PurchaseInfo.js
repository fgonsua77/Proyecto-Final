import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Breadcrumb from 'react-bootstrap/Breadcrumb';


const PurchaseInfo = () => {
    const {purchaseId}  = useParams(0);
    const {user} = useParams(1);
    console.log(useParams());
    const [purchase, setPurchase] = useState({});
    const [ventasCompra, setVentasCompra] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/purchases/${purchaseId}`)
            .then(response => response.json())
            .then(purchase => setPurchase(purchase))
    }, []);
    console.log(purchase);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/${purchaseId}`)
            .then(response => response.json())
            .then(ventasCompra => setVentasCompra(ventasCompra))
    }, []);
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
                                <Link to="/account" >
                                    {user}
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link to={`/purchases/${user}`} >
                                    Compras
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <span>Compra #</span>{purchase.id}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1>Compra #{purchase.id}</h1>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <h3>Total</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Fecha de pago</h3>
                        <p>{purchase.paymentdate}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Fecha de envio</h3>
                        <p>{purchase.shipmentdate}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                    <div className="row">
                    <div className="col-12">
                        
                    </div>
                </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3>Productos</h3>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        <span>Vendedor</span>
                                    </th>
                                    <th>
                                        <span>Producto</span>
                                    </th>
                                    <th>
                                        <span>Precio</span>
                                    </th>
                                    <th>
                                        <span>Cantidad</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ventasCompra.map(venta => (
                                    <tr key={venta.id}>
                                        <td>{venta.vendedor.name}</td>
                                        <td>{venta.carta.name}</td>
                                        <td>{venta.price}€</td>
                                        <td>{venta.amount}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};


export default PurchaseInfo;