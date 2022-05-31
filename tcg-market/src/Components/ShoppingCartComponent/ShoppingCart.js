/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from 'react-router-dom';
const cart = (props) => {
   const {cartItems, onRemove} = props;
   console.log(cartItems);
   function borrarElCarrito(carrito){
      carrito.map(item => {
         onRemove(item);
      });
   }
   return (
      <div className="cart-container  align-items-center">
         <div className="cart-header d-flex justify-content-center">
            <h1>Carrito de compras</h1>
         </div>
         <div className="cart-body d-flex justify-content-center">
            {cartItems.length > 0 ? (
               cartItems.map((sale) =>
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
                                       <span>{sale.carta.name}</span>
                                    </td>
                                    <td>
                                       <span className="font-link p-2">{sale.carta.expansion.code}</span>
                                       <span className="font-link p-2">{sale.state}</span>
                                       <span className="font-link p-2">{sale.comments}</span>
                                       <span className="font-link p-2">{sale.language}</span>
                                       <span className="font-link p-2">{sale.description}</span>
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
               )
            ) : (
               <div className="alert alert-info d-flex justify-content-center">
                  No hay productos en el carrito
               </div>
            )}
         </div>
         <div className="cart-footer d-flex justify-content-center">
            <div className="d-flex">
               <div className="flex-grow-1">
                  <Link to="/shoppingCart">
                     <button className="btn btn-primary m-2">
                        <span>Finalizar compra</span>
                     </button>
                     <button className="btn btn-warning m-2" onClick={() => borrarElCarrito(cartItems)}>
                        <span>Limpiar el carrito</span>
                     </button>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default cart;
