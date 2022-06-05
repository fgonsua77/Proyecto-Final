import './CardInfo.css';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import {Image, Breadcrumb, Row, Container } from 'react-bootstrap';
import CardSalesComponent from '../CardSalesListComponent';

import axios from 'axios';
const CardInfo = (props) => {
    const auth = useSelector((state) => state.auth);
    const { cardId } = useParams();
    const [carta, setCarta] = useState({});
    const [sales, setSales] = useState([]);
    const {user} = props;
    
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/cardId=${cardId}`)
            .then(response => response.json())
            .then(carta => setCarta(carta))
            .then(console.log(carta));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/ventasSinComprar/carta/cardId=${cardId}`)
            .then(response => response.json())
            .then(sales => setSales(sales))
            .then(console.log(sales));

            setSales(
                sales.map(sale => ({
                    ...sale,
                    "direccion": {
                        "id": "",
                    },
                    "envio": {
                        "id": "",
                    }
                })))
    }, []);
    console.log(sales);
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
    const breadCrumps = (
        <>
            <Breadcrumb>
                <Breadcrumb.Item className="font-link">
                    <Link to="/home" >
                        Inicio
                    </Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item className="font-link">
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
                    <h1 className="font-link">{carta.name} - {carta.code}</h1>
                    <Image src={carta.image} height="393px" width="270px" />


                </div>

            </div>
            <div class="row pt-3">

                <Container class="col-lg-12 pt-3">
                    {auth.isLoggedIn ? (<button onClick={() => addToFavorites(cardId, user.id)}>Añadir a favoritos</button>) : (
                        <Link to="/login">
                            <span className="font-link">
                                Inicia sesión para añadir a favoritos
                            </span>
                        </Link>
                    )}
                    <h1 className="font-link">Ofertas</h1>
                    <CardSalesComponent sales={sales} onAdd={props.onAdd} cartItems={props.cartItems} modifySales={props.modifySales} setSales={setSales} />
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