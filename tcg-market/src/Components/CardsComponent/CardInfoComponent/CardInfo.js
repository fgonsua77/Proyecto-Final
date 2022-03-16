import './CardInfo.css';
import { useParams} from 'react-router-dom';
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const CardInfo = (props) => {
    const {onAdd} = props;
    const {cardId} = useParams();
    const [card, setCard] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/${cardId}`)
        .then(response => response.json())
        .then(card => setCard(card));
    }, [cardId]);
    
    return (
            <Container class="p-4">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Inicio</Breadcrumb.Item>
                    <Breadcrumb.Item href="/cards">
                        Productos
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{card.nombre}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    <div className=" d-flex justify-content-center col-lg-6">
                        <Image src={card.imagen} />
                    </div>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{card.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><h4>Codigo:</h4>{card.codigo}</ListGroupItem>
                                <ListGroupItem><h4>Precio:</h4>{card.precio}€</ListGroupItem>
                                <ListGroupItem><h4>Palabras Clave:</h4> {card.keywords}</ListGroupItem>
                                <ListGroupItem><h4>Texto:</h4>{card.texto}</ListGroupItem>
                            </ListGroup>
                        </Container>
                        <Container class="d-flex justify-content-end">
                                <Button className="pt-2" onClick={() => onAdd(card)}>Añadir al carrito</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
    );
};

export default CardInfo;