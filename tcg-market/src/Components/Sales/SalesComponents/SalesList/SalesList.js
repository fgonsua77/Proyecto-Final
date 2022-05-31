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
                                <th scope="col" className="font-link">Producto a vender</th>
                                <th scope="col" className="font-link">Precio</th>
                                <th scope="col" className="font-link">Estado</th>
                                <th scope="col" className="font-link">Lenguaje</th>
                                <th scope="col" className="font-link">Comentarios</th>
                                <th scope="col" className="font-link">Cantidad</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ventasUsuario.map(venta => (
                                <tr key={venta.id}>
                                    <td className="font-link">
                                        <Link to={`/card/${venta.carta.id}`}>
                                            {venta.carta.name}
                                        </Link>
                                    </td>
                                    <td className="font-link">{venta.price}</td>
                                    <td className="font-link">{venta.state}</td>
                                    <td className="font-link">{venta.language}</td>
                                    <td className="font-link">{venta.comments}</td>
                                    <td className="font-link">{venta.amount}</td>
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