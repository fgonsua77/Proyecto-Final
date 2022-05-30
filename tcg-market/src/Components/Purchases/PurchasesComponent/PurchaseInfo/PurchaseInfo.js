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
<div className="card d-flex col-md-3" key={sale.id}>
                     <h2 className="h4 mb-0 card-header col-md-3">
                        <span>{sale.vendedor.name}</span>
                        <div class="toggler d-lg-none btn btn-sm btn-link">
                           <div class="on">
                              <span class="fonticon-chevron-down">
                              </span>
                           </div>
                           <div class="off">
                              <span class="fonticon-chevron-left">
                              </span>
                           </div>
                        </div>
                     </h2>
                     <div className="collapsable card-body ">
                        <div className="row blocks">
                           <div className="col-12 col-lg">
                              <div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Contenido</span>
                                    <span><span>{sale.amount}</span> Articulos</span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Valor del pedido</span>
                                    <span><span>{sale.price}€</span></span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Gastos de envio</span>
                                    <span><span>{sale.shipmentbill}€</span></span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Total</span>
                                    <span><span></span></span>
                                 </div>
                              </div>
                           </div>
                           {/* <div className="col-12 col-lg">
                              <select class="form-select" aria-label="Elige tu forma de envio">
                                 <option selected>No Ordinario <span name="shipmentbill">2</span><span>€</span></option>
                                 <option value="1">One</option>
                                 <option value="2">Two</option>
                                 <option value="3">Three</option>
                              </select>
                           </div> */}
                        </div>
                        <div className="action-bar ">
                           {/* Aquí programamos los botones para acceder más información del vendedor */}
                        </div>
                        <div className="category-subsection">
                           <table className="table table-striped mb-1">
                              <thead>
                                 <tr>
                                    <th>
                                       <span>Nombre</span>
                                    </th>
                                    <th>
                                       <span>Información</span>
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
                                 <tr>
                                    <td>
                                       <span>{sale.carta.name}</span>
                                    </td>
                                    <td>
                                       <span className="p-2">{sale.carta.expansion.code}</span>
                                       <span className="p-2">{sale.state}</span>
                                       <span className="p-2">{sale.comments}</span>
                                       <span className="p-2">{sale.language}</span>
                                       <span className="p-2">{sale.description}</span>
                                    </td>
                                    <td>
                                       <span>{sale.price}€</span>
                                    </td>
                                    <td>
                                       <span>x{sale.amount}</span>
                                    </td>
                                    <td>
                                       <Link to="/shoppingCart">
                                          <button onClick={() => onRemove(sale)}>Eliminar</button>
                                       </Link>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>
                  </div>

export default PurchaseInfo;