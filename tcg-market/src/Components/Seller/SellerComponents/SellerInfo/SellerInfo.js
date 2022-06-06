import { Card } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
const SellerInfo = (props) => {
    const {user} = props;
    const id = useParams().id;
    const [seller, setSeller] = useState([]);
    const [ventaMenor, setVentaMenor] = useState([]);
    const [ventasListadas, setVentasListadas] = useState([]);
    const [ventasCompletadas, setVentasCompletadas] = useState([]);
    // useEffect(() => {
    //     fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${username}`)
    //         .then(response => response.json())
    //         .then(seller => setSeller(seller))
    //         .catch(error => console.log(error));
    // }, []);
    // console.log(seller);
    // console.log(seller.id);
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${user}`)
            .then(response => response.json())
            .then(seller => setSeller(seller))
            .catch(error => console.log(error));
    }  , []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventas/preciomenor/username=${user}`)
            .then((response) => response.json())
            .then((ventaMenor) => setVentaMenor(ventaMenor))
            .catch(error => console.log(error));
    }, []);
    // useEffect(() => {
    //     fetch(`http://localhost:8080/sale/totalVentasCompletadas/userId=${id}`)
    //         .then((response) => response.json())
    //         .then((ventasCompletadas) => setVentasCompletadas(ventasCompletadas))
    //         .catch(error => console.log(error));
    // }, []);
    useEffect(() => {
        fetch(`http://localhost:8080/sale/ventasTotalesSinComprar/username=${user}`)
            .then((response) => response.json())
            .then((ventasListadas) => setVentasListadas(ventasListadas))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <div>
                <Card>
                    <Card.Header>
                        <h1>Perfil del vendedor: {seller.username}</h1>
                    </Card.Header>
                    <Card.Body className="m-3">
                        <h3><span>Registrado desde: </span>{seller.registerdate}</h3>
                        {/* <h3><span>Ventas completadas: </span>{ventasCompletadas ? ventasCompletadas : "No tiene ventas completadas"}</h3> */}
                    </Card.Body>
                </Card>
                <div className="row">
                    <div className="col-12 col-lg justify-content-center align-items-center">
                        <Card className="card-body">
                            <Card.Title>Ventas</Card.Title>
                            {/* <Card.Img>
                                {ventaMenor ? <img src={ventaMenor.carta.image} alt={ventaMenor.carta.name} /> : <span>No hay ventas</span>}
                            </Card.Img> */}
                            <Card.Text>
                                <Link to={`/sales/${seller.username}`}>
                                <span className="font-link">{ventasListadas} ventas listadas</span>
                                </Link>
                            </Card.Text>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};


export default SellerInfo;