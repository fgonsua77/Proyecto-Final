import { Table } from "react-bootstrap";
import GameListItem from "../GameListItem/GameListItem";
import Pagination from '../../../PaginationComponent/Pagination';
import { useState } from 'react';
const GameList = (props) => {
    const {games} = props;
    const [elementsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentelements = games.slice(indexOfFirstElement, indexOfLastElement);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            <div className="row">
                <Table striped bordered hover responsive="xl" className="pt-3">
                    <thead>
                        <tr>
                            <td className="font-link">
                                <span>Nombre</span>
                            </td>
                            <td className="font-link">
                                <span>Compañia</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {games.map(game => <GameListItem key={game.id} game={game} />)}
                    </tbody>
                </Table>
            </div>
            <Pagination
                elementsPerPage={elementsPerPage}
                totalelements={games.length}
                paginate={paginate} />
        </>
    );
};

export default GameList;