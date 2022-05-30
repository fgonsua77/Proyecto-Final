import CardItemList from "../CardsComponent/CardItemList";
import { useParams, Link} from 'react-router-dom';
import {useState, useEffect} from 'react';
import { Breadcrumb } from "react-bootstrap";
import Pagination from "../PaginationComponent/Pagination";
const Resultado = () => {
    const {game} = useParams();
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
    const [cardsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div className="container">
            <Breadcrumb>
                <Breadcrumb.Item>
                    <Link to="/home">
                        Inicio
                    </Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    {currentCards.length} resultados de {search}
                </Breadcrumb.Item>

            </Breadcrumb>
            <div>
                <h1 className="d-flex justify-content-center">Resultado de tu busqueda!</h1> 
                {loading ? <h2>Loading....</h2> : <CardItemList cards={cards} />}
            </div>
            <Pagination
            elementsPerPage={cardsPerPage}
            totalelements={cards.length}
            paginate={paginate}/>
        </div>
    );
};

export default Resultado;