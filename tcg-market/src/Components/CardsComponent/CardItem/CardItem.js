import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import './CardItem.css';

const CardItem = ({card = {}}) => {
    return (
        <div className="postLink" class="col-lg-3">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>{card.nombre}</Card.Title>
                    <ListGroup className="list-group-flush">
                        <ListGroupItem>Precio: {card.precio}€</ListGroupItem>
                    </ListGroup>
                    <Card.Body>
                    <Button variant="primary" class="p-4">Ver más</Button>
                    <Button variant="primary">Comprar</Button>
                    </Card.Body>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CardItem;