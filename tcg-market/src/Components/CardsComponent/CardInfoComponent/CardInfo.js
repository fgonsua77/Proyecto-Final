import './CardInfo.css';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardSalesComponent from '../CardSalesListComponent';

import axios from 'axios';
const CardInfo = (props) => {
    console.log(props.ventas, props.modifySales);
    const auth = useSelector((state) => state.auth);
    const [quantity, setQuantity] = useState(1);
    const { cardId } = useParams();
    const [carta, setCarta] = useState({});
    const [itemSales, setItemSales] = useState([]);
    const [sales, setSales] = useState([]);
    const userId = localStorage.getItem('id');
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/cardId=${cardId}`)
            .then(response => response.json())
            .then(carta => setCarta(carta))
            .then(console.log(carta));
    }, []);
    async function addToFavorites(idCarta, idUsuario) {

        try {
            const response = axios.post(`http://localhost:8080/apicartas/cartas/addtoFavs/cardId=${idCarta}&userId=${idUsuario}`)
            console.log("Request successful!")
        } catch (error) {
            if (error.response) {
                console.log(error.reponse.status)
            } else {
                console.log(error.message)
            }
        }
    };

    console.log("Estas son las ventas de la carta: ", itemSales);
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
            <div class="row pt-3">
                <div className="col-lg-12">
                    <h1>{carta.name} - {carta.code}</h1>
                    <Image src={carta.image} height="393px" width="270px" />


                </div>

            </div>
            <div class="row pt-3">

                <Container class="col-lg-12 pt-3">
                    {auth.isLoggedIn ? (<button onClick={() => addToFavorites(cardId, userId)}>Añadir a favoritos</button>) : (
                        <Link to="/login">
                            <span>
                                Inicia sesión para añadir a favoritos
                            </span>
                        </Link>
                    )}
                    <h1>Ofertas</h1>
                    <CardSalesComponent sales={sales} onAdd={props.onAdd} cartItems={props.cartItems} modifySales={props.modifySales} />
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