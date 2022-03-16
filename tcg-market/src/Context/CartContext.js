import { useState } from "react";
import { createContext } from "react";

const cartContext = createContext({
    cart: [],
    setCart: () => null
});


const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    );
}

export default CartContextProvider;
export { cartContext };