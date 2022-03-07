import './Cards.css';
import{useEffect, useState} from "react";
import CardItemList from "../CardItemList";
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/apicartas/cartas')
        .then(response => response.json())
        .then(cards => setCards(cards))
        .then(() => setLoading(false));
        
    }, []);

    if(loading){
        return <h2>Loading....</h2>
    }
    return (
        <div className="cards">
            <h1 class="d-flex justify-content-center">Cartas</h1>
            <CardItemList cards={cards} />
        </div>
    );
}
export default Cards;