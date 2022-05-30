
import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardItemList from '../../../CardsComponent/CardItemList';

const ExpansionInfo = () => {
    const { expansionId } = useParams();
    const [expansion, setExpansion] = useState({});
    const [cartasExpansion, setCartasExpansion] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/expansion/${expansionId}`)
            .then(response => response.json())
            .then(expansion => setExpansion(expansion));
    }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/apicartas/cartas/idExpansion=${expansionId}`)
            .then(response => response.json())
            .then(cartasExpansion => setCartasExpansion(cartasExpansion));
    }, []);
    console.log(expansion);
    console.log(cartasExpansion);
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1><span>{expansion.code} - </span>{expansion.name}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 d-flex align-items-center">
                        <img src={expansion.image} className="img-fluid" alt={expansion.name} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Fecha de salida</h1>
                        <p>{expansion.releasedate}</p>
                    </div>
                    <div className="col-md-12">
                        <h1>Descripción de la expansion</h1>
                        {/* <p>{expansion.description}</p> */}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <h1>Cartas de la expansion</h1>
                        <CardItemList cards={cartasExpansion} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default ExpansionInfo;