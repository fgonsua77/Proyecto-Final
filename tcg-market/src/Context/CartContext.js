import { createContext, useState } from "react";


const cartContext = createContext({
    cart: [],
    setCart: () => null
});


const cartContextProvider = ({children}) => {

    // Context
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={{cart, setCart}}>
            {children}
        </cartContext.Provider>
    );
}


// Exportas context (para usarlo desde otro archivo)
export default cartContextProvider;
export { cartContext };