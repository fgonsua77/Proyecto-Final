import './Cards.css';
import{useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardItemList from "../CardItemList";
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [busqueda, setBusqueda] = useState();
    const [cardPerPage, setCardsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/apicartas/cartas')
        .then(response => response.json())
        .then(cards => setCards(cards))
        .then(() => setLoading(false));
    }, []);

    
    if(loading){
        return <h2>Loading....</h2>
    }
    const indexOfLastCard = currentPage * cardPerPage;
    const indexOfFirstCard = indexOfLastCard - cardPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    return (
        <div className="cards">
            <div className="searchBar">
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Busca por Nombre</Form.Label>
                        <Form.Control type="text" value={busqueda} placeholder="Buscar..." onChange={(e) => setBusqueda(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            <h1 class="d-flex justify-content-center">Cartas</h1>
            <CardItemList cards={currentCards}/>
        </div>
    );
}
export default Cards;