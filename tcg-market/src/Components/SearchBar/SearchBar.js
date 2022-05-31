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
            <div className="d-flex container pt-2">
                <div className="row">
                    <DropdownButton id="dropdown-basic-button" title="Secciones" classname="col">

                        <Dropdown.Item>

                            <span className="font-link">Juegos</span>

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
                    <form classname="col">
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