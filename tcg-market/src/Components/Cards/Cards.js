import './Cards.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import CardItemList from "../CardsComponent/CardItemList";
const Cards = (props) => {
    const {game} = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();
    const [busqueda, setBusqueda] = useState("");
    
    useEffect(() => {
        setLoading(true)
        search === undefined && fetch(`http://localhost:8080/apicartas/cartas`)
            .then(response => response.json())
            .then(cards => setCards(cards))
            .then(() => setLoading(false));
    }, []);
    if (loading) {
        return <h2>Loading....</h2>
    }
    
    const breadCrumps = (
        <>
            <Breadcrumb className="d-flex col">
                <Breadcrumb.Item className="font-link">
                    <Link to="/home" >
                        Inicio
                    </Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item active className="font-link">Productos
                </Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
    
    return (
        <div className="d-flex justify-content-center row" >
            <div className='col'>
                {breadCrumps}
                <h1 className="font-link d-flex justify-content-center">Cartas</h1>
                <CardItemList cards={cards}  />
                
            </div>



        </div>
    );
}
export default Cards;