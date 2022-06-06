import { ListGroup, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import axios from "axios";
const AccountAddress = (props) => {
    const { username, id } = props;
    console.log(props);
    const [addresses, setAddresses] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:8080/address/addresses/username=${username}`)
            .then((response) => response.json())
            .then((addresses) => setAddresses(addresses))
    }, []);

    function deleteDirection(idAddress) {
        Swal.fire({
            title: '¿Estas segur@ de borrar esta dirección?',
            text: "No podrás revertir esta operación",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                const response = axios.delete(`http://localhost:8080/address/delete/${idAddress}`);
                if (response.status === 200) {
                    Swal.fire(
                        'Borrada!',
                        'Tu dirección ha sido eliminada.',
                        'success'
                    )
                } else {
                    Swal.fire(
                        'Error!',
                        'No se ha podido borrar la dirección.',
                        'error'
                    )
                }
            }
        })
    }

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
                                <div className="row">
                                    <div className="col-6-md">
                                        <Link to={`/account/${username}/address=${address.id}`}>
                                            {address.addressname}
                                        </Link>
                                    </div>
                                    <div className="col-6-md">
                                        <Button variant="danger" onClick={() => { deleteDirection(address.id) }}>Eliminar</Button>
                                    </div>
                                </div>
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