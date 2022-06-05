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
            {/* -- */}

            <div className="card">
                <div className="card-header">
                    <h1>Direcciones</h1>
                </div>
                <div className="card-body m-3">
                    <ListGroup>
                        {addresses.map(address => (
                            <ListGroup.Item key={address.id}>
                                <Link to={`/account/address=${address.id}`}>
                                    {address.addressname}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Link to={`/account/${username}/createAddress`}>
                        <Button className="mt-3" variant="success">
                            Crear nueva dirección
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    );
};


export default AccountAddress;