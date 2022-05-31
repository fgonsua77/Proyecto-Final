import Table from 'react-bootstrap/Table';
import Pagination from '../../../PaginationComponent/Pagination';
import ExpansionsListItem from '../ExpansionsListItem/ExpansionsListItem';
import { useState } from 'react';
const ExpansionsList = (props) => {
    const { expansions } = props;

    const [elementsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentelements = expansions.slice(indexOfFirstElement, indexOfLastElement);
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
                                <span>Código</span>
                            </td>
                            <td className="font-link">
                                <span>Juego</span>
                            </td>
                            <td className="font-link">
                                <span>Fecha de Salida</span>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {expansions.map(expansion => <ExpansionsListItem key={expansion.id} expansion={expansion} />)}
                    </tbody>
                </Table>
            </div>
            <Pagination
                elementsPerPage={elementsPerPage}
                totalelements={expansions.length}
                paginate={paginate} />
        </>
    );
}

export default ExpansionsList;