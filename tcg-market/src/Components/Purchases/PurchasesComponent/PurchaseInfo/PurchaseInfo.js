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
        fetch(`http://localhost:8080/sale/saleId=${purchaseId}`)
            .then(response => response.json())
            .then(purchase => setPurchase(purchase))
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
                                <Link to="/account" >
                                    {user}
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                <Link to={`/purchases/${user}`} >
                                    Compras
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                <span>Compra #</span>{purchase.id}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="font-link">Compra #{purchase.id}</h1>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-link">Total</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-link">Fecha de pago</h3>
                        <p>{purchase.paymentdate}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-link">Fecha de envio</h3>
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
                        <h3 className="font-link">Productos</h3>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>
                                        <span className="font-link">Vendedor</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Producto</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Precio</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Cantidad</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {ventasCompra.map(venta => (
                                    <tr key={venta.id}>
                                        <td className="font-link">{venta.vendedor.name}</td>
                                        <td className="font-link">{venta.carta.name}</td>
                                        <td className="font-link">{venta.price}€</td>
                                        <td className="font-link">{venta.amount}</td>
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