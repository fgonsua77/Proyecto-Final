import { useParams, Link } from 'react-router-dom';
import { Breadcrumb, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
const AccountAddressInfo = () => {
    const username = localStorage.getItem('username');
    const idAddress = useParams().addressname;
    const [address, setAddress] = useState({});
    console.log(username, idAddress);
    useEffect(() => {
        fetch(`http://localhost:8080/address/idAddress=${idAddress}`)
            .then((response) => response.json())
            .then((address) => setAddress(address))
            .then(console.log(address));
    }, []);
    return (
        <>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 p-5">
                        <Breadcrumb>
                            <Breadcrumb.Item>
                                <Link to={"/home"}>
                                    Inicio
                                </Link>
                            </Breadcrumb.Item>

                            <Breadcrumb.Item>
                                <Link to={`/account/${username}`}>
                                    {username}
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                {address.addressname}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 p-5">
                        <h1>{address.addressname}</h1>
                        <span><h4>Nombre de Destinatario: </h4><p>{address.name}</p></span>
                        <span><h4>Apellido de Destinatario: </h4><p>{address.surname}</p></span>
                        <span><h4>Calle: </h4><p>{address.street}</p></span>
                        <span><h4>Piso: </h4><p>{address.floor}</p></span>
                        <span><h4>Puerta/Numero: </h4><p>{address.number}</p></span>
                        <span><h4>Código Postal: </h4><p>{address.postalcode}</p></span>
                        <span><h4>Ciudad: </h4><p>{address.city}</p></span>
                        <span><h4>Provincia: </h4><p>{address.province}</p></span>
                        <span><h4>País: </h4><p>{address.country}</p></span>
                        <span><h4>Comentarios: </h4><p>{address.comments}</p></span>
                        <label for="preferred">Preferida</label>
                        <input type="checkbox" id="preferred" value={address.preferred} />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountAddressInfo;