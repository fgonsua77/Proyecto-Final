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
const CardInfo = () => {
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
                    <Col>
                    <Image src={card.imagen} />
                    </Col>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{card.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem>Codigo: {card.codigo}</ListGroupItem>
                                <ListGroupItem>Precio: {card.precio}€</ListGroupItem>
                                <ListGroupItem>Palabras Clave: {card.keywords}</ListGroupItem>
                                <ListGroupItem>Texto: {card.texto}</ListGroupItem>
                            </ListGroup>
                        </Container>
                        <Container class="d-flex justify-content-end">
                                <Button variant="primary" className="pt-2" href="" >Comprar</Button>
                        </Container>
                    </Col>
                </Row>
            </Container>
    );
};

export default CardInfo;