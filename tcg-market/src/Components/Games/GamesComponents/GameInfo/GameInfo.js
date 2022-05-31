import { useEffect, useState } from "react";
import { ListGroup, ListGroupItem, Breadcrumb } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
const GameInfo = () => {
    const [game, setGame] = useState({});
    const [expansionsGame, setExpansionsGame] = useState([]);
    const { gameId } = useParams();
    useEffect(() => {
        fetch(`http://localhost:8080/games/gameId=${gameId}`)
            .then(response => response.json())
            .then(game => setGame(game))
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/expansion/juego/${gameId}`)
            .then(response => response.json())
            .then(expansionsGame => setExpansionsGame(expansionsGame))
    }, []);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item className="font-link">
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                <Link to="/games" >
                                    Juegos
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className="font-link">
                                <span>{game.name}</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h1 className="font-link">{game.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 justify-content-center">
                        <img src={game.image} alt={game.name} className="img-fluid" />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-link">Descripción</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="font-link">{game.description}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <h3 className="font-link">Expansiones</h3>
                        <ListGroup>
                            {expansionsGame.map(expansion => (
                                <ListGroupItem key={expansion.id}>
                                    <Link to={`/expansion/${expansion.id}`}>
                                        {expansion.name}
                                    </Link>
                                </ListGroupItem>
                            ))}
                        </ListGroup>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GameInfo;