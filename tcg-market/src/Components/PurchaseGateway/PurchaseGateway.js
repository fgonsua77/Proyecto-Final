
import { useEffect, useState } from "react";
import { Breadcrumb, Button, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
const PurchaseGateway = (props) => {
    const { cartItems, user } = props;
    const [sales, setSales] = useState(cartItems);
    const [shipments, setShipments] = useState([]);
    const [addresses, setAddresses] = useState([]);
  
    function totalPrice(price, amount) {
        return (price * amount);
    }
    useEffect(() => {
        setSales(
            sales.map(sale => ({
                ...sale,
                "direccion": {
                    "id": "",
                },
                "envio": {
                    "id": "",
                },
                "comprador":{
                    "id": user.id,
                }
            })))
        console.log(sales);
    }, [])
    function handleChangeObjectInsideObject(evt, currentValue, index) {
        console.log(currentValue, index);
        setSales({
            ...sales,
            [index]: {
                ...currentValue,
                [evt.target.name]: evt.target.value
            }
        });
    };
    useEffect(() => {
        fetch(`http://localhost:8080/shipments/`)
            .then(response => response.json())
            .then(shipments => setShipments(shipments))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/address/addresses/username=${user}`)
            .then(response => response.json())
            .then(addresses => setAddresses(addresses))
    }, []);
    function saveSales(event) {
        event.preventDefault();
        handleChangeObject();
        const peticion = axios.post(`http://localhost:8080/sale/saveVentas`, sales)
    }
    return (

        <>
            <div className="container p-5">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item className="font-link">
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active className="font-link">
                                Pasarela de Pago
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="font-link">Pasarela de Pago</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {cartItems.map((sale, index, currentValue) => {
                            return(
                                <div className="card d-flex col-md-3" key={sale.id}>
                            <h2 className="h4 mb-0 card-header col-md-3">
                                <span className="font-link">{sale.vendedor.name}</span>
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
                                                <span className="flex-grow-1">Total</span>
                                                <span>{totalPrice(sale.amount, sale.price)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-lg">
                                        <select class="form-select" aria-label="Elige tu forma de envio" name="envio" value={sale.envio.id} onChange={handleChangeObjectInsideObject(event, currentValue, index)}>
                                            {shipments.map(shipment => (
                                                <option key={shipment.id} value={shipment.id}>{shipment.name} <span>{shipment.price}</span><span>€</span></option>
                                            ))}
                                        </select>
                                    </div>
                                    <div className="col-12 col-lg">
                                        <select class="form-select" aria-label="Elige tu dirección" name="dirección" value={sale.direccion.id} onChange={handleChangeObjectInsideObject(event, currentValue, index)}>
                                            {addresses.map(address => (
                                                <option key={address.id} value={address.id}>{address.addressname} <span>{address.name}</span><span>{address.surname}</span></option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <div className="action-bar row">
                                    <Col>
                                        <Link to={`/sales/${sale.vendedor}`}>
                                            Ver más productos de este vendedor
                                        </Link>
                                    </Col>
                                    {/* <Col>
                            <Link to={``}>
        
                            </Link>
                        </Col> */}
                                </div>
                                <div className="category-subsection">
                                    <table className="table table-striped mb-1">
                                        <thead>
                                            <tr>
                                                <th>
                                                    <span className="font-link">Nombre</span>
                                                </th>
                                                <th>
                                                    <span className="font-link">Información</span>
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
                                            <tr>
                                                <td>
                                                    <Link to={`/card/${sale.carta.id}`}>
                                                        <span>{sale.carta.name}</span>
                                                    </Link>
                                                </td>
                                                <td>
                                                    <Link to={`/expansions/${sale.carta.expansion.id}`}>
                                                        <span className="font-link p-2">{sale.carta.expansion.code}</span>
                                                    </Link>
                                                    <span className="font-link p-2">{sale.state}</span>
                                                    <span className="font-link p-2">{sale.comments}</span>
                                                    <span className="font-link p-2">{sale.language}</span>
                                                    <span className="font-link p-2">{sale.description}</span>
                                                </td>
                                                <td>
                                                    <span className="font-link">{sale.price}€</span>
                                                </td>
                                                <td>
                                                    <span className="font-link">x{sale.amount}</span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                            )
                            
                        })}
                    </div>
                    <Button className="btn btn-success" onClick={saveSales}>Confirmar pago</Button>
                    <Button className="btn btn-danger">Cancelar compra</Button>
                    <Button className="btn btn-primary">Volver a la tienda</Button>
                </div>
            </div>
        </>
    );

}





export default PurchaseGateway;