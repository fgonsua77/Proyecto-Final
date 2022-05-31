import GameList from "./GamesComponents/GameList/GameList";
import { useEffect, useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
const Games = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        fetch("http://localhost:8080/games/")
            .then(response => response.json())
            .then(games => setGames(games));
    }, []);
    return (
        <div className=" p-3 container">
            <div className=" p-3 row">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item className="font-link">
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                Juegos
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className=" p-3 row">
                <div className="row">
                    <div className="col-12">
                        <h1 className="font-link">Juegos</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <GameList games={games} />
                    </div>
                </div>
            </div>
        </div>
        
    );
};


export default Games;