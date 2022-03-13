import './Cards.css';
import{useEffect, useState} from "react";
import { useParams} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardItemList from "../CardItemList";
import Pagination from "../../PaginationComponent/Pagination";
const Cards = () => {

    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [busqueda, setBusqueda] = useState();
    const [cardsPerPage, setCardsPerPage] = useState(4);
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
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
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
            <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={cards.length}
            paginate={paginate}
            />
        </div>
    );
}
export default Cards;