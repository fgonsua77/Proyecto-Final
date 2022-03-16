/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { cartContext } from "../../Context/CartContext";

const cart = () => {
const cont = useContext(cartContext);

const navigate = useNavigate();

const eliminarCarta = (idEliminar) => {
    cont.setCart(
    cont.cart.filter((carta) => carta.id !== idEliminar)
    );
};

    return cont.cart.length > 0 ? (
        <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Carta</th>
                    <th>Cantidad</th>
                    <th className="text-center">Precio</th>
                    <th> </th>
                    <th> </th>
                </tr>
                </thead>
                <tbody>
                {
                    //Lista de productos
                }
                {cont.cart.map((carta) => {
                    return (
                    <tr key={carta.id}>
                        <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <a className="thumbnail pull-left" href="#">
                            {" "}
                            <img
                                className="media-object imagen-cart"w
                                src={carta.imagen}
                            ></img>{" "}
                            </a>
                            <div className="media-body">
                            <h4 className="media-heading">
                                <a href="#">{carta.nombre}</a>
                            </h4>
                            </div>
                        </div>
                        </td>
                        <td className="col-sm-1 col-md-1">
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            value={carta.cantidad}
                            readOnly={true}
                        ></input>
                        </td>
                        <td className="col-sm-1 col-md-1 text-center">
                        <strong>{carta.cantidad * carta.precio}€</strong>
                        </td>
                        <td> </td>
                        <td className="col-sm-1 col-md-1">
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick={() => eliminarCarta(carta.id)}
                        >
                            <span className="glyphicon glyphicon-remove"></span>{" "}
                            Eliminar
                        </button>
                        </td>
                    </tr>
                    );
                })}

                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                    <h3>Total</h3>
                    </td>
                    <td className="text-right">
                    <h3>
                        <strong>
                        {cont.cart.reduce(
                            (total, carta) => total + carta.precio,
                            0
                        )}
                        €
                        </strong>
                    </h3>
                    </td>
                </tr>
                <tr>
                    <td>   </td>
                    <td>   </td>
                    <td>   </td>
                    <td>
                    <button type="button" className="btn btn-default">
                        Continue Shopping
                    </button>
                    </td>
                    <td>
                    <button type="button" className="btn btn-success">
                        Checkout
                    </button>
                    </td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </div>
    ) : (
        <button
        onClick={() => navigate("/", { replace: true })}
        type="button"
        className="btn btn-default"
        >
        Continue Shopping
        </button>
    );
};

export default cart;
