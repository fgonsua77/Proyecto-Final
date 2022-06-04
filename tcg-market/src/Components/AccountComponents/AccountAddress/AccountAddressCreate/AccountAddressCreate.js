import { useState } from "react";
import { Form, Breadcrumb, Button } from "react-bootstrap";
import { Link } from "react-router-dom";



const AccountAddressCreate = () => {
    const userid = localStorage.getItem("id");
    const username = localStorage.getItem("username");
    const initialState = {
        iduser: userid,
        addressname: "",
        name: "",
        surname: "",
        street: "",
        floor: "",
        postalcode: "",
        city: "",
        country: "",
        province: "",
        number: "",
        comments: "",
        preferred: false
    };
    const [addressToCreate, setAddressToCreate] = useState(
        initialState);

    function handleChange(event) {
        const value = event.target.value;
        setAddressToCreate({
            ...addressToCreate,
            [event.target.name]: value
        });
    }

    function createAddress(event, AddressToCreate) {
        event.preventDefault();
        console.log(AddressToCreate);
        fetch(`http://localhost:8080/address/saveAddress/idUser=${addressToCreate.iduser}&addressname=${addressToCreate.addressname}&name=${addressToCreate.name}&surname=${addressToCreate.surname}&street=${addressToCreate.street}&floor=${addressToCreate.floor}&number=${addressToCreate.number}&postalcode=${addressToCreate.postalcode}&city=${addressToCreate.city}&province=${addressToCreate.province}&country=${addressToCreate.country}&comments=${addressToCreate.comments}&preferred=${addressToCreate.preferred}`, {
            method: 'POST'
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .then(setAddressToCreate(initialState))
            .catch(err => console.log(err));

    }

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
                                Nueva Dirección
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12 p-5">
                        <h1>Crear una nueva dirección</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-12">
                        <Form onSubmit={() => createAddress(event, addressToCreate)}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre de la dirección</Form.Label>
                                <Form.Control type="text" name="addressname" onChange={handleChange} value={addressToCreate.addressname} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre del Destinatario</Form.Label>
                                <Form.Control type="text" name="name" onChange={handleChange} value={addressToCreate.name} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Apellidos del destinatario</Form.Label>
                                <Form.Control type="text" name="surname" onChange={handleChange} value={addressToCreate.surname} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Calle</Form.Label>
                                <Form.Control type="text" name="street" onChange={handleChange} value={addressToCreate.calle} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Piso</Form.Label>
                                <Form.Control type="text" name="floor" onChange={handleChange} value={addressToCreate.floor} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="text" name="number" onChange={handleChange} value={addressToCreate.number} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Código Postal</Form.Label>
                                <Form.Control type="text" name="postalcode" onChange={handleChange} value={addressToCreate.postalcode} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Ciudad</Form.Label>
                                <Form.Control type="text" name="city" onChange={handleChange} value={addressToCreate.city} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Provincia</Form.Label>
                                <Form.Control type="text" name="province" onChange={handleChange} value={addressToCreate.province} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>País</Form.Label>
                                <Form.Control type="text" name="country" onChange={handleChange} value={addressToCreate.country} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Comentarios</Form.Label>
                                <Form.Control type="text" name="comments" onChange={handleChange} value={addressToCreate.comments} rows={3} />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Label>Dirección preferida</Form.Label>
                                <Form.Check name="preferred" onChange={handleChange} value={addressToCreate.preferred} />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Guardar
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AccountAddressCreate;