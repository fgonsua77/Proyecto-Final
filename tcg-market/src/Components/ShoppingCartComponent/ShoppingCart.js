/* eslint-disable react-hooks/rules-of-hooks */

import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import ProductTemplate from '../ProductTemplateCart';
const cart = (props) => {
   const auth = useSelector((state) => state.auth);
   const dispatch = useDispatch();
   const { cartItems, onRemove, clearStorage } = props;
   const username = localStorage.getItem('username');
   console.log(cartItems);
   function borrarElCarrito(carrito) {
      carrito.map(item => {
         onRemove(item);
      });
   }
   const handleCarrito = (
      <div className="cart-footer d-flex justify-content-center">
         <div className="d-flex">
            <div className="flex-grow-1">
               <Link to="/shoppingCart">
               <Link to={`/purchases/${username}/gateway`}>
                  <button className="btn btn-primary m-2">
                    
                     <span className="font-link">Finalizar compra</span>
                     
                  </button>
                  </Link>
                  <button className="btn btn-warning m-2" onClick={() =>clearStorage()}>
                     <span className="font-link">Limpiar el carrito</span>
                  </button>
               </Link>
            </div>
         </div>
      </div>
   );
      
   const registerCart = (
      <div className="cart-footer d-flex justify-content-center">
         <Link to={`/login`}>
            <h3 className='font-link'>Inicia sesión para comprar</h3>
         </Link>

      </div>
   )
   return (
      <div className="cart-container  align-items-center">
         <div className="cart-header d-flex justify-content-center">
            <h1>Carrito de compras</h1>
         </div>
         <div className="cart-body d-flex justify-content-center">
            {cartItems.length > 0 ? (
               cartItems.map((sale) =>
                  <ProductTemplate sale={sale} onRemove={onRemove}/>
               )
            ) : (
               <div className="alert alert-info d-flex justify-content-center">
                  <span className="font-link">No hay productos en el carrito</span>
               </div>
            )}
         </div>
         {auth.isLoggedIn ? handleCarrito : registerCart}
      </div>
   );
};

export default cart;
