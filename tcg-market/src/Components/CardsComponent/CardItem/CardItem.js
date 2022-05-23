/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import cartContext from '../../../Context/CartContext';
import QuantitySelector from '../../QuantitySelectorComponent/QuantitySelector';
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
                <td>{carta.expansion.code}</td>
                <td>
                <Link to={`/card/cardId=${carta.id}`}>
                    {carta.name}
                </Link>
                </td>
                <td>{carta.code}</td>
                <td>{totalAmount}</td>
                <td>{sales.price}€</td>
            </tr>

        </>

    );
    return (
        userCard
    );
};

export default CardItem;