import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardItemList from "../CardsComponent/CardItemList/CardItemList";

const favorites = (props) => {
    const userId = localStorage.getItem('id');
    const [favorites, setFavorites] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/favorites/userid=${userId}`)
            .then(response => response.json())
            .then(favorites => setFavorites(favorites));
    }, []);
    const Breadcrumbs = (
        <>
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/home" >
                        Inicio
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <span>Usuario</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>Favoritos</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );


    return (
        <>
            <div className="d-flex justify-content-center row">
                <div className="col">
                    {Breadcrumbs}
                    <h1>Favoritos</h1>
                    <CardItemList cards={favorites} />
                </div>
            </div>
        </>
    );
};

export default favorites;