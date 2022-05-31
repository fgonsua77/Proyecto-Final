import "./Home.css";
import { useState, useEffect } from "react";
import CardItemList from "../CardsComponent/CardItemList";
import Pagination from "../PaginationComponent/Pagination";
import { useSelector } from 'react-redux';
import { Carousel } from "react-bootstrap";

const Home = (props) => {
    const { game } = props;
    const [cards, setCards] = useState([]);
    const [expansions, setExpansions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(4);
    const [currentPage, setCurrentPage] = useState(1);
    const auth = useSelector((state) => state.auth);
    const user = localStorage.getItem('user');
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/apicartas/cartas/destacadas`)
            .then(response => response.json())
            .then(cards => setCards(cards))
            .then(() => setLoading(false));
    }, []);
    useEffect(() => {
        setLoading(true)
        fetch(`http://localhost:8080/expansion/last3expansions`)
            .then(response => response.json())
            .then(expansions => setExpansions(expansions))
            .then(() => setLoading(false));
    }, []);
    if (loading) {
        return <h2 class="d-flex justify-content-center">Loading....</h2>
    }
    // const indexOfLastCard = currentPage * cardsPerPage;
    // const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    // const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);

    // const paginate = pageNumber => setCurrentPage(pageNumber);

    const userHome = (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="font-link">Bienvenido a TCG-Market, {user} </h1>
                    </div>
                </div>
                <h1 className="font-link d-flex justify-content-center">Destacados</h1>
                <CardItemList cards={cards} />
                {/* <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={cards.length}
                paginate={paginate}
            /> */}
            </div>
        </div>
    );
    const guestHome = (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="font-link">Bienvenido a TCG-Market, Invitado</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="font-link">
                            Este es un sitio web para comprar cartas tanto de Yu-Gi-Oh, Cardfight Vanguard y Digimon TCG.
                        </p>
                    </div>
                </div>
                <h1 className="font-link d-flex justify-content-center">Destacados</h1>
                <CardItemList cards={cards} />
                {/* <Pagination
                    cardsPerPage={cardsPerPage}
                    totalCards={cards.length}
                    paginate={paginate}
                /> */}
            </div>
        </div>
    );
    const carousel = (
        <Carousel className="carousel">
            {expansions.map(expansion => (
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={expansion.image}
                        alt={expansion.name}
                    />
                </Carousel.Item>
            ))}
        </Carousel>
    );
    return (
        <div className="container">
            <div className="row">
                {carousel}
            </div>
            <div className="row">
                {auth.isLoggedIn ? userHome : guestHome}
            </div>

        </div>

    );
};

export default Home;