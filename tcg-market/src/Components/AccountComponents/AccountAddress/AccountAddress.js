import { ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const AccountAddress = (props) => {
    const {username, id} = props;
    console.log(props);
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/address/addresses/username=${username}`)
            .then((response) => response.json())
            .then((addresses) => setAddresses(addresses))
    }, []);
    return (
        <>

            <div className="card">
                <div className="card-header">
                    <h1>Direcciones</h1>
                </div>
                <div className="card-body m-3">
                    <ListGroup>
                        {addresses.map(address => (
                            <ListGroup.Item key={address.id}>
                                <Link to={`/account/${username}/address=${address.id}`}>
                                    {address.addressname}
                                </Link>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                    <Link to={`/account/${username}/${id}/createAddress`}>
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