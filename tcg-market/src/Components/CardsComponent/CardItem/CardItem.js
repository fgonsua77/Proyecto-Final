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

const CardItem = ({carta = {}, onComprar}) => {
    const auth = useSelector((state) => state.auth);
    const [quantity, setQuantity] = useState(1);
    const guestCard =(
        <>
        <div className="postLink" class="col-lg-3">
            <Card style={{ width: '18rem' }} href="/infoProducto">
                <Link to={`/card/cardId=${carta.id}`}>
                    <Card.Img variant="top" src={carta.imagen} width="220" height="440"/>
                </Link>
                <Card.Body>
                    <Card.Title styled="12px">{carta.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {carta.precio}€</ListGroupItem>
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
                <Link to={`/card/cardId=${carta.id}`}>
                    <Card.Img variant="top" src={carta.imagen} width="220" height="440"/>
                </Link>
                <Card.Body>
                    <Card.Title styled="12px">{carta.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {carta.precio}€</ListGroupItem>
                        <ListGroupItem>Cantidad:</ListGroupItem>
                        <QuantitySelector onChange={newQuantity => setQuantity(newQuantity)} /> 
                    </ListGroup>
                    <Button onClick={() => onComprar(carta, quantity)}>Añadir al carrito</Button>
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