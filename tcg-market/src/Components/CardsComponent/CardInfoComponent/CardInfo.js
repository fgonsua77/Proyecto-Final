import './CardInfo.css';
import { useParams, Link} from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import QuantitySelector from '../../QuantitySelectorComponent/QuantitySelector';
const CardInfo = (props) => {
    const auth = useSelector((state) => state.auth);
    const {onAdd} = props;
    const {cardId} = useParams();
    const [card, setCard] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/${cardId}`)
        .then(response => response.json())
        .then(card => setCard(card));
    }, [cardId]);
    const guestCardInfo = (
        <>
        <div className=" d-flex justify-content-center col-lg-6">
                        <Image src={card.imagen} />
                    </div>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{card.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><h4>Codigo:</h4>{card.codigo}</ListGroupItem>
                                <ListGroupItem><h4>Palabras Clave:</h4> {card.keywords}</ListGroupItem>
                                <ListGroupItem><h4>Texto:</h4>{card.texto}</ListGroupItem>
                                <ListGroupItem><h4>Precio:</h4>{card.precio}€</ListGroupItem>
                            </ListGroup>
                        </Container>
                    </Col>
        </>
    );
    const userCardInfo = (
        <>
        <div className=" d-flex justify-content-center col-lg-6">
                        <Image src={card.imagen} />
                    </div>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{card.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><h4>Codigo:</h4>{card.codigo}</ListGroupItem>
                                <ListGroupItem><h4>Palabras Clave:</h4> {card.keywords}</ListGroupItem>
                                <ListGroupItem><h4>Texto:</h4>{card.texto}</ListGroupItem>
                            </ListGroup>
                        </Container>
                        <Container class="d-flex justify-content-end">
                            <QuantitySelector onAdd={onAdd} card={card}/>
                            <Button className="pt-2" onClick={() => onAdd(card)}>Añadir al carrito</Button>
                        </Container>
                    </Col>
        </>
    );
    return (
            <Container class="p-4">
                <Breadcrumb>
                    <Breadcrumb.Item >
                    <Link to="/home" >
                        Inicio
                    </Link>
                    
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                    <Link to="/cards">
                        Productos
                    </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active>{card.nombre}</Breadcrumb.Item>
                </Breadcrumb>
                <Row>
                    {auth.isLoggedIn ? userCardInfo : guestCardInfo};
                </Row>
            </Container>
    );
};

export default CardInfo;