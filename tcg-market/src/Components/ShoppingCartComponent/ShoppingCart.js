/* eslint-disable react-hooks/rules-of-hooks */
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { getData, deleteCart } from "../../Context/CartContext";
import QuantitySelector from './../QuantitySelectorComponent/QuantitySelector';

const cart = () => {
   const cart = getData();
   return (
      <div className="cart-container">
         <div className="cart-header">
            <h1>Carrito de compras</h1>
         </div>
         <div className="cart-body">
            {cart.length > 0 ? (
               cart.map(sale =>
                  <div className="cart-body" key={sale.id}>
                     <h2 className="h4 mb-0">
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
                     <div className="collapsable">
                        <div className="row blocks">
                           <div className="col-12 col-lg">
                              <div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Contenido</span>
                                    <span><span>{sale.amount}</span> Articulos</span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Valor del pedido</span>
                                    <span><span>{sale.price}</span></span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Gastos de envio</span>
                                    <span><span>{sale.shipmentbill}</span></span>
                                 </div>
                                 <div className="d-flex">
                                    <span className="flex-grow-1">Total</span>
                                    <span><span>{(sale.price * sale.amount) + sale.shipmentbill}</span></span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="action-bar mb-3">
                           {/* Aquí programamos los botones para acceder más información del vendedor */}
                        </div>
                        <div className="category-subsection">
                           <table className="table-striped mb-1">
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
                                       <span>{sale.carta.expansion.code}</span>
                                       <span>{sale.state}</span>
                                       <span>{sale.comments}</span>
                                       <span>{sale.language}</span>
                                       <span>{sale.description}</span>
                                    </td>
                                    <td>
                                       <span>{sale.price}</span>
                                    </td>
                                    <td>
                                       <span>{sale.amount}</span>
                                    </td>
                                    <td>
                                       <button onClick={deleteCart(sale.id)}>Eliminar</button>
                                    </td>
                                 </tr>
                              </tbody>
                           </table>
                        </div>
                     </div>

                  </div>
               )

            ) : (
               <div className="alert alert-info">
                  No hay productos en el carrito
               </div>
            )}
         </div>
         <div className="cart-footer">
            <h3>Total: {cart.reduce((total, cart) => total + cart.price * cart.quantity, 0)}</h3>
            <Link to="/checkout">
               <button className="btn btn-success">
                  Comprar
               </button>
            </Link>
         </div>
      </div >
   );
};

export default cart;
