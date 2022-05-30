import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import PurchaseList from "./PurchasesComponent/PurchaseList/PurchaseList";
import Pagination from "../PaginationComponent/Pagination";

const Purchases = (props) => {
    const { user } = useParams();
    const userId = localStorage.getItem("id");
    const [purchases, setPurchases] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(`http://localhost:8080/purchases/idUser=${userId}`)
            .then(response => response.json())
            .then(purchases => setPurchases(purchases))
            .then(() => setLoading(false));
        console.log(purchases);
    }, []);
    const [elementsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const indexOfLastElement = currentPage * elementsPerPage;
    const indexOfFirstElement = indexOfLastElement - elementsPerPage;
    const currentelements = purchases.slice(indexOfFirstElement, indexOfLastElement);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const breadCrumps = (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item >
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                <Link to="/account" >
                                    {user}
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                {currentelements.length}Compras
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
        </>
    );

    return (
        <>
            <div className="container">
                {breadCrumps}
                <div className="row">
                    <PurchaseList purchases={purchases} user={user} />
                </div>
            </div>

            <Pagination
                elementsPerPage={elementsPerPage}
                totalelements={purchases.length}
                paginate={paginate} />
        </>
    );
}

export default Purchases;