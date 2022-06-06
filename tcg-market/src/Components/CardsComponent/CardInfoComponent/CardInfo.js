import './CardInfo.css';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState, useEffect } from 'react';
import { Image, Breadcrumb, Row, Container } from 'react-bootstrap';
import CardSalesComponent from '../CardSalesListComponent';
import Swal from 'sweetalert2';
import axios from 'axios';
const CardInfo = (props) => {
    const auth = useSelector((state) => state.auth);
    const { cardId } = useParams();
    const [carta, setCarta] = useState({});
    const [sales, setSales] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const {username} = props;
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${username}`)
            .then((response) => response.json())
            .then((usuario) => setUsuario(usuario))
    }, []);
    console.log(usuario);
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/getCarta/cardId=${cardId}`)
            .then(response => response.json())
            .then(carta => setCarta(carta))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventasSinComprar/carta/cardId=${cardId}`)
            .then(response => response.json())
            .then(sales => setSales(sales))

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
    async function addToFavorites(idCarta) {

        const exist = usuario.favorites.find((x) => x.id === idCarta);
        console.log(exist);
        if (exist) {
            Swal.fire(
                'Este producto ya esta en favoritos',
                'No puedes repetir favoritos',
                'error'
            )
        } else {
            const response = axios.post(`http://localhost:8080/apicartas/cartas/addtoFavs/cardId=${idCarta}&username=${username}`)
            Swal.fire(
                'Se ha añadido el producto a favoritos',
                'Siga navegando!',
                'success'
            )
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
                    <Image src={carta.image} alt={carta.name} height="393px" width="270px" />
                </div>

            </div>
            <div class="row pt-3">

                <Container class="col-lg-12 pt-3">
                    {auth.isLoggedIn ? (<button onClick={() => addToFavorites(cardId)}>Añadir a favoritos</button>) : (
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