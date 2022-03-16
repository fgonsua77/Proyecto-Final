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
const CardInfo = (onComprar) => {
    const auth = useSelector((state) => state.auth);
    const [quantity, setQuantity] = useState(1);
    const {cardId} = useParams();
    const [carta, setCarta] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/${cardId}`)
        .then(response => response.json())
        .then(carta => setCarta(carta));
    }, [cardId]);
    const guestCardInfo = (
        <>
        <div className=" d-flex justify-content-center col-lg-6">
                        <Image src={carta.imagen} />
                    </div>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{carta.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><h4>Codigo:</h4>{carta.codigo}</ListGroupItem>
                                <ListGroupItem><h4>Palabras Clave:</h4> {carta.keywords}</ListGroupItem>
                                <ListGroupItem><h4>Texto:</h4>{carta.texto}</ListGroupItem>
                                <ListGroupItem><h4>Precio:</h4>{carta.precio}€</ListGroupItem>
                            </ListGroup>
                        </Container>
                    </Col>
        </>
    );
    const userBreadCrumps = (
        <>
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
            <Breadcrumb.Item active>{carta.nombre}</Breadcrumb.Item>
        </Breadcrumb>
        </>
    );
    const guestBreadCrumps = (
        <>
        <Breadcrumb>
            <Breadcrumb.Item >
                Inicio
            </Breadcrumb.Item>
            <Breadcrumb.Item>
                Productos
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{carta.nombre}</Breadcrumb.Item>
        </Breadcrumb>
        </>
    );
    const userCardInfo = (
        <>
        <div className=" d-flex justify-content-center col-lg-6">
                        <Image src={carta.imagen} />
                    </div>
                    <Col>
                        <Container class="d-flex flex-column">
                            <h1>{carta.nombre}</h1>
                            <ListGroup className="list-group-flush">
                                <ListGroupItem><h4>Codigo:</h4>{carta.codigo}</ListGroupItem>
                                <ListGroupItem><h4>Palabras Clave:</h4> {carta.keywords}</ListGroupItem>
                                <ListGroupItem><h4>Texto:</h4>{carta.texto}</ListGroupItem>
                            </ListGroup>
                        </Container>
                        <Container class="d-flex justify-content-end">
                            <QuantitySelector carta={carta}/>
                            <Button className="pt-2" onClick={() => onComprar(carta, quantity)}>Añadir al carrito</Button>
                        </Container>
                    </Col>
        </>
    );
    return (
            <Container class="p-4">
                {auth.isLoggedIn ? userBreadCrumps : guestBreadCrumps};
                <Row>
                    {auth.isLoggedIn ? userCardInfo : guestCardInfo};
                </Row>
            </Container>
    );
};

export default CardInfo;