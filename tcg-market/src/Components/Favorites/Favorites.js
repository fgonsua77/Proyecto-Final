
import { Link } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import CardItemList from "../CardsComponent/CardItemList/CardItemList";
import { useEffect, useState } from "react";
const favorites = (props) => {
   const user = props;
   const [usuario, setUsuario] = useState([]);
   useEffect(() => {
       fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${user}`)
           .then((response) => response.json())
           .then((usuario) => setUsuario(usuario))
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
                    <span className="font-link">Usuario</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item active className="font-link">Favoritos</Breadcrumb.Item>
            </Breadcrumb>
        </>
    );


    return (
        <>
            <div className="d-flex justify-content-center row">
                <div className="col">
                    {Breadcrumbs}
                    <h1 className="font-link">Favoritos</h1>
                    {usuario.favorites ? <CardItemList cards={usuario.favorites} /> : <span>No hay favoritos</span>}
                </div>
            </div>
        </>
    );
};

export default favorites;