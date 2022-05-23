import './Cards.css';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from 'react-router-dom';
import CardItemList from "../CardsComponent/CardItemList";
import Pagination from "../PaginationComponent/Pagination";
const Cards = () => {
    const {game} = useParams();
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState();
    const [busqueda, setBusqueda] = useState("");
    const [cardsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setLoading(true)
        search === undefined && fetch(`http://localhost:8080/apicartas/cartas/buscarPorJuego/nombre=${game}`)
            .then(response => response.json())
            .then(cards => setCards(cards))
            .then(() => setLoading(false));
    }, []);
    // useEffect(() => {
    //     setLoading(true)
    //     search !== undefined && fetch(`http://localhost:8080/apicartas/cartas/buscarPorNombre/${search}`)
    //     .then(response => response.json())
    //     .then(cards => setCards(cards))
    //     .then(() => setLoading(false));
    // }, [search]);
    if (loading) {
        return <h2>Loading....</h2>
    }
    // const indexOfLastCard = currentPage * cardsPerPage;
    // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const breadCrumps = (
        <>
            <Breadcrumb className="d-flex col">
                <Breadcrumb.Item >
                    <Link to="/home" >
                        Inicio
                    </Link>

                </Breadcrumb.Item>
                <Breadcrumb.Item active>Productos
                </Breadcrumb.Item>
            </Breadcrumb>
        </>
    );
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <div className="d-flex justify-content-center row" >
            <div className='col'>
                {breadCrumps}
                <h1 class="d-flex justify-content-center">Cartas</h1>
                <CardItemList cards={cards} />
                {/* <Pagination
            cardsPerPage={cardsPerPage}
            totalCards={cards.length}
            paginate={paginate}/> */}
            </div>



        </div>
    );
}
export default Cards;