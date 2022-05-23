import './CardInfo.css';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardSalesComponent from '../CardSalesListComponent';
const CardInfo = (onComprar) => {
    const auth = useSelector((state) => state.auth);
    const [quantity, setQuantity] = useState(1);
    const { cardId } = useParams();
    const [carta, setCarta] = useState({});
    const [sales, setSales] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/${cardId}`)
            .then(response => response.json())
            .then(carta => setCarta(carta))
            .then(console.log(carta));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/carta/${cardId}`)
            .then(response => response.json())
            .then(sales => setSales(sales))
            .then(console.log(sales));
    }, []);
    const breadCrumps = (
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
                <Breadcrumb.Item active>{carta.name}</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );

    const cardInfo = (
        <>
            <div class="row">
                <div className="col-lg-12">
                    <h1>{carta.name} - {carta.code}</h1>
                    <Image src={carta.image} height="393px" width="270px" />
                </div>
            </div>
            <div class="row">
                <Container class="col-lg-12">
                    <CardSalesComponent sales={sales} />
                </Container>
            </div>

        </>
    );
    return (
        <Container class="p-4">
            {breadCrumps}
            {cardInfo}
        </Container>
    );
};

export default CardInfo;