import React from 'react';
import {useState} from 'react';
export default function Basket(props) {
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
    const shippingPrice = itemsPrice > 2000 ? 0 : 20;
    const totalPrice = itemsPrice + shippingPrice;
    const [cartItems, setCartItems] = useState([]);

const onAdd = (card) => {
    const exist = cartItems.find((x) => x.id === card.id);
    if (exist) {
        setCartItems(
        cartItems.map((x) =>
            x.id === card.id ? { ...exist, qty: exist.qty + 1 } : x
        )
    );
    } else {
    setCartItems([...cartItems, { ...card, qty: 1 }]);
    }
};
const onRemove = (card) => {
    const exist = cartItems.find((x) => x.id === card.id);
    if (exist.qty === 1) {
        setCartItems(cartItems.filter((x) => x.id !== card.id));
    } else {
        setCartItems(
            cartItems.map((x) =>
            x.id === card.id ? { ...exist, qty: exist.qty - 1 } : x
            )
        );
    }
};
return (
    <aside className="block col-1">
    <h2>Cart Items</h2>
        <div>
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) => (
        <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>
            <div className="col-2">
                <button onClick={() => onRemove(item)} className="remove">
                    -
                </button>{' '}
                <button onClick={() => onAdd(item)} className="add">
                    +
                </button>
            </div>

            <div className="col-2 text-right">
                {item.qty} x ${item.price.toFixed(2)}
            </div>
        </div>
        ))}

        {cartItems.length !== 0 && (
        <>
            <hr></hr>
            <div className="row">
                <div className="col-2">Precio de la carta</div>
                <div className="col-1 text-right">${itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
                <div className="col-2">Precio de envio</div>
                <div className="col-1 text-right">
                ${shippingPrice.toFixed(2)}
                </div>
            </div>

            <div className="row">
                <div className="col-2">
                    <strong>Precio total</strong>
                </div>
                <div className="col-1 text-right">
                    <strong>${totalPrice.toFixed(2)}</strong>
                </div>
            </div>
            <hr />
            <div className="row">
                <button onClick={() => alert('Implement Checkout!')}>
                Checkout
                </button>
            </div>
            </>
        )}
        </div>
    </aside>
    );
}