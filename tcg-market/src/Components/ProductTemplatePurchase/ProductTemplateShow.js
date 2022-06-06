import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductTemplate = (props) => {

    const { sale } = props;
    function totalPrice(price, amount, shipment) {
        const priceInteger = parseInt(price);
        const amountInteger = parseInt(amount);
        const shipmentInteger = parseInt(shipment);
        return (priceInteger * amountInteger) + shipmentInteger;
    }
    return (
        <>
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
                                    <span className="flex-grow-1">Tipo del envio</span>
                                    <span><span>{sale.envio.name}€</span></span>
                                </div>
                                <div className="d-flex">
                                    <span className="flex-grow-1">Valor del envio</span>
                                    <span><span>{sale.envio.price}€</span></span>
                                </div>
                                <div className="d-flex">
                                    <span className="flex-grow-1">Total</span>
                                    <span>{totalPrice(sale.amount, sale.price, sale.envio.price)}</span>
                                </div>
                            </div>
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
                        <table className="table table-striped mb-1">
                            <h3>Evaluación</h3>
                            <thead>
                                <tr>
                                    <th>
                                        <span className="font-link">General</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Empaquetado</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Articulo</span>
                                    </th>
                                    <th>
                                        <span className="font-link">Comentario</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <span className="font-link p-2">{sale.evaluacion.general}</span>
                                        <span className="font-link p-2">{sale.evaluacion.packing}</span>
                                        <span className="font-link p-2">{sale.evaluacion.article}</span>
                                        <span className="font-link p-2">{sale.evaluacion.comments}</span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};


export default ProductTemplate;