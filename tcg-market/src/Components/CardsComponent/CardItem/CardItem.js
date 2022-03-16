/* eslint-disable no-unused-vars */
import Card from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import {useState} from "react";
import cartContext from '../../../Context/CartContext';
import QuantitySelector from '../../QuantitySelectorComponent/QuantitySelector';
import './CardItem.css';

const CardItem = ({card = {}}) => {
    const auth = useSelector((state) => state.auth);
    const [quantity, setQuantity] = useState(1);
    const guestCard =(
        <>
        <div className="postLink" class="col-lg-3">
            <Card style={{ width: '18rem' }} href="/infoProducto">
                <Link to={`/card/cardId=${card.id}`}>
                    <Card.Img variant="top" src={card.imagen} width="220" height="440"/>
                </Link>
                <Card.Body>
                    <Card.Title styled="12px">{card.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {card.precio}€</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
        </>
    );
    const userCard =(
        <>
        <div className="postLink" class="col-lg-3">
            <Card style={{ width: '18rem' }} href="/infoProducto">
                <Link to={`/card/cardId=${card.id}`}>
                    <Card.Img variant="top" src={card.imagen} width="220" height="440"/>
                </Link>
                <Card.Body>
                    <Card.Title styled="12px">{card.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {card.precio}€</ListGroupItem>
                        <ListGroupItem>Cantidad:</ListGroupItem>
                        <QuantitySelector onChange={newQuantity => setQuantity(newQuantity)} /> 
                    </ListGroup>
                    <Button onComprar={(card, quantity) => cartContext.setCarrito([...cartContext.cart,{ ...card, quantity },])}>Añadir al carrito</Button>
                </Card.Body>
            </Card>
        </div>
        </>
        
    );
    return (
        auth.isLoggedIn ? userCard : guestCard
    );
};

export default CardItem;