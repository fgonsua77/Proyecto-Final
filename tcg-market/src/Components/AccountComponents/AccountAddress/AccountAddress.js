import { ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AccountAddress = (props) => {
    const [addresses, setAddresses] = useState([]);
    const username = localStorage.getItem("username");
    useEffect(() => {
        fetch(`http://localhost:8080/address/addresses/userId=${props.iduser}`)
            .then((response) => response.json())
            .then((addresses) => setAddresses(addresses))
            .then(console.log(addresses));
    }, []);
    console.log(addresses);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 p-5">
                        <h1>Direcciones</h1>
                        
                        <ListGroup className="p-5">
                            {addresses.map(address => (
                                <Link to={`/account/address=${address.id}`}>
                                    <ListGroup.Item key={address.id}>
                                        {console.log(address.id)}
                                        {address.addressname}
                                    </ListGroup.Item>
                                </Link>
                            ))}
                        </ListGroup>
                        <Link to={`/account/${username}/createAddress`}>
                            <Button variant="primary">
                                Crear nueva dirección
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};


export default AccountAddress;