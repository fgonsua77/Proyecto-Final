/* eslint-disable react-hooks/rules-of-hooks */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from "react-bootstrap";

const busqueda = () => {

    const [loading, setLoading] = useState(false);
    const [busqueda, setBusqueda] = useState("");
    const [search, setSearch] = useState([]);
    return (
        <>
            <div className="p-2 my-2">
                <div className="d-flex flex-row justify-content-around">
                    <DropdownButton id="dropdown-basic-button" title="Secciones" classname="col">

                        <Dropdown.Item>
                            <Link to="/games/" className="font-link">Juegos</Link>

                        </Dropdown.Item>

                        <Dropdown.Item >
                            <Link to={`/expansions`}>
                                <span className="font-link">
                                    Expansiones
                                </span>
                            </Link>

                        </Dropdown.Item>
                        <Dropdown.Item>
                            <Link to={`/cards/`}>
                                <span className="font-link">Cartas</span>
                            </Link>
                        </Dropdown.Item>
                    </DropdownButton>
                    <form className="d-flex flex-row flex-fill mx-3">
                        <input class="form-control me-sm-2" type="text" placeholder="Busca en TCGMarket!" onChange={event => setBusqueda(event.target.value)} value={busqueda} onKeyPress={event => event.key == 'Enter' && setSearch(busqueda)} />
                        <Link to={`/cards/search/${busqueda}`}>
                            <button type="submit" class="btn btn-primary">Buscar</button>
                        </Link>
                    </form>
                </div>
            </div>
        </>
    );
}
export default busqueda;