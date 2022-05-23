/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const busqueda = () => {
    const [games, setGames] = useState([]);
    const [game, setGame] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        fetch('http://localhost:8080/games/')
            .then(response => response.json())
            .then(games => setGames(games))
            .then(game => setGame("Cardfight Vanguard!"))
            .then(() => setLoading(false));
    }, []);
    const [busqueda, setBusqueda] = useState("");
    const [search, setSearch] = useState([]);
    const gameOnChange = (e) => {
        setGame(e.target.value);
    };
    return (
        <div className="p-2 d-flex justify-content-center row">
            <div className="btn-group col-md-1" role="group" aria-label="Button group with nested dropdown">
                <button type="button" class="btn btn-primary">Juegos</button>
                <div class="btn-group" role="group">
                    <button id="btnGroupDrop1" type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                    <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                        {games.map(game => <a className="dropdown-item" key={game.id} onChange={gameOnChange} href={`/cards/${game.name}`}>{game.name}</a>)}
                    </div>
                </div>
            </div>
            <form class="d-flex col-md-11">
                <input class="form-control me-sm-2" type="text" placeholder="Search" onChange={event => setBusqueda(event.target.value)} value={busqueda} onKeyPress={event => event.key == 'Enter' && setSearch(busqueda)} />
                <Link to={`/cards/search/${search}`}>
                    <button type="submit" class="btn btn-primary"><FontAwesomeIcon icon="search" />Buscar</button>
                </Link>
            </form>
        </div>
    );
}
export default busqueda;