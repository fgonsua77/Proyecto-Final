import CardItemList from "../CardsComponent/CardItemList";
import { useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
const Resultado = () => {
    const [cards, setCards] = useState([]);
    const { search } = useParams();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true)
        search !== undefined && fetch(`http://localhost:8080/apicartas/cartas/buscarPorNombre/${search}`)
            .then(response => response.json())
            .then(cards => setCards(cards))
            .then(() => setLoading(false));
    }, [search]);
    return (
        <div className="cards">
            <h1 className="d-flex justify-content-center">Resultado de tu busqueda!</h1>
            <CardItemList cards={cards} />
        </div>
    );
};

export default Resultado;