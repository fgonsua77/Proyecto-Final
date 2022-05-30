import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Pagination from '../../../PaginationComponent/Pagination';

const SalesList = (props) => {
    const { ventasUsuario, user } = props;

    const [elementsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentelements = elements.slice(indexOfFirstElement, indexOfLastElement);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1>Ventas de {user}</h1>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th scope="col">Producto a vender</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Estado</th>
                                <th scope="col">Lenguaje</th>
                                <th scope="col">Comentarios</th>
                                <th scope="col">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasUsuario.map(venta => (
                                <tr key={venta.id}>
                                    <td>
                                        <Link to={`/card/${venta.carta.id}`}>
                                            {venta.carta.name}
                                        </Link>
                                    </td>
                                    <td>{venta.price}</td>
                                    <td>{venta.state}</td>
                                    <td>{venta.language}</td>
                                    <td>{venta.comments}</td>
                                    <td>{venta.amount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <Link to="/">
                        <Button variant="primary">
                            Crear nueva venta
                        </Button>
                    </Link>

                </div>
            </div>
            <Pagination
                elementsPerPage={elementsPerPage}
                totalelements={ventasUsuario.length}
                paginate={paginate} />
        </>
    );
};


export default SalesList;