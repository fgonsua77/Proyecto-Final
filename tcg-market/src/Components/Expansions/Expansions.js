import './Expansions.css';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'react-bootstrap';
import ExpansionsList from './ExpansionsComponents/ExpansionsList';


const Expansions = () => {

    const [expansions, setExpansions] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/expansion/')
            .then(response => response.json())
            .then(expansions => setExpansions(expansions))
            .then(() => setLoading(false));
    }, []);
    if (loading) {
        return <div>Cargando...</div>
    }

    return (
        <>  <div className=" p-3 container">
            <div className=" p-3 row">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb className="d-flex col">
                            <Breadcrumb.Item >
                                <Link to="/home" >
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item >
                                Expansiones
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
            </div>
            <div className=" p-3 row">
                <div className="row">
                    <div className="col-12">
                        <h1>Expansiones</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <ExpansionsList expansions={expansions} />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};



export default Expansions;