import "./Home.css";
import {useState, useEffect} from "react";
import CardItemList from "./CardComponent/CardItemList";
import Pagination from "./PaginationComponent/Pagination";
const Home = () => {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(false);
    const [cardsPerPage, setCardsPerPage] = useState(2);
    const [currentPage, setCurrentPage] = useState(1);
    useEffect(() => {
        setLoading(true)
        fetch('http://localhost:8080/apicartas/cartas/destacadas')
        .then(response => response.json())
        .then(cards => setCards(cards))
        .then(() => setLoading(false));
    }, []);
    if(loading){
        return <h2 class="d-flex justify-content-center">Loading....</h2>
    }
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <h1 className="h1">Bienvenido a TCG-Market</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <p className="p">
                            Este es un sitio web para comprar cartas tanto de Yu-Gi-Oh, Cardfight Vanguard y Digimon TCG.
                        </p>
                    </div>
                </div>
                <h1 class="d-flex justify-content-center">Cartas</h1>
                <CardItemList cards={currentCards}/>
                <Pagination
                cardsPerPage={cardsPerPage}
                totalCards={cards.length}
                paginate={paginate}
            />
            </div>
        </div>
    );
};

export default Home;