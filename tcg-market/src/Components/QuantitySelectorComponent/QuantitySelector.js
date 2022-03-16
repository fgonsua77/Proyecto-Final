import { useState } from "react";


const QuantitySelector = ({onChange}) => {

    const [quantity, setQuantity] = useState(1); // Variable, setter y valor inicial

    const addOne = () => {
        onChange(quantity + 1);
        setQuantity(quantity + 1);
    }

    const removeOne = () => {
        if(quantity > 0) {
            onChange(quantity - 1);
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="input-group mb-3"> 
            <button onClick={() => removeOne()} className="input-group-text">-</button>
            <input type="text" className="form-control" onChange={() => null} value={quantity}></input> 
            <button onClick={() => addOne()} className="input-group-text">+</button> 
        </div>
    )
}

export default QuantitySelector;