import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductTemplate = (props) => {

    const { sale, onRemove } = props;
    function totalPrice(price, amount) {
        return (price * amount);
    }
    return (
        <>
            <div className="card d-flex col-md-3 mb-3" key={sale.id}>
                <h2 className="h4 mb-0 card-header">
                    <span className="font-link">{sale.vendedor.name}</span>
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
                                    <span>{totalPrice(sale.price, sale.amount)}€</span>
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
        </>
    );
};


export default ProductTemplate;