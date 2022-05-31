/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import './CardItem.css';

const CardItem = ({ carta = {} }) => {
    const [sales, setSales] = useState([]);
    const [totalAmount, setTotalAmount] = useState(1);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/preciomenor/cardId=${carta.id}`)
            .then(response => response.json())
            .then(sales => setSales(sales))
            .then(console.log(sales));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/total/cardId=${carta.id}`)
            .then(response => response.json())
            .then(totalAmount => setTotalAmount(totalAmount))
            .then(console.log(totalAmount));
    }, []);
    const userCard = (
        <>
            <tr>
                <td>{carta.expansion.juego.name}</td>
                <td className="font-link">
                    <Link to={`/expansions/${carta.expansion.id}`}>
                        {carta.expansion.code}
                    </Link>
                </td>
                <td className="font-link">
                    <Link to={`/card/${carta.id}`}>
                        {carta.name}
                    </Link>
                </td>
                <td className="font-link">{carta.code}</td>
                <td className="font-link">{totalAmount}</td>
                <td className="font-link">{sales.price}€</td>
            </tr>

        </>

    );
    return (
        userCard
    );
};

export default CardItem;