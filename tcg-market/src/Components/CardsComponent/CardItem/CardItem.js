import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import './CardItem.css';

const CardItem = ({card = {}}) => {
    return (
        <div className="postLink" class="col-lg-3">
            <Card style={{ width: '18rem' }} href="/infoProducto">
                <Link to={`/card/cardId=${card.id}`}>
                    <Card.Img variant="top" src={card.imagen}/>
                </Link>
                <Card.Body>
                    <Card.Title>{card.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {card.precio}€</ListGroupItem>
                    </ListGroup>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItem;