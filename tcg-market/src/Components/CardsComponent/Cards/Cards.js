import './Cards.css';
import {useEffect, useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardItemList from "../CardItemList";
import Pagination from "../../PaginationComponent/Pagination";
import { useSearchParams } from "react-router-dom";
const Cards = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [ search, setSearch ] = useState();
    const [busqueda, setBusqueda] = useState("");
    const [cardsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setLoading(true)
        search === undefined && fetch('http://localhost:8080/apicartas/cartas')
        .then(response => response.json())
        .then(cards => setCards(cards))
        .then(() => setLoading(false));
    }, []);
    useEffect(() => {
        setLoading(true)
        search !== undefined && fetch(`http://localhost:8080/apicartas/cartas/buscarPorNombre/${search}`)
        .then(response => response.json())
        .then(cards => setCards(cards))
        .then(() => setLoading(false));
    }, [search]);
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
                        <Form.Control type="text" onChange={event => setBusqueda(event.target.value)} value={busqueda} onKeyPress={event => event.key == 'Enter' && setSearch(busqueda)} placeholder="Buscar..."  />
                    </Form.Group>
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