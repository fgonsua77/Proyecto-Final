import { useEffect, useState } from "react";
import { Form, Breadcrumb, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const AccountAddressCreate = (props) => {
    let {user, userId} = useParams();
    console.log(user, userId);
    const initialState = {
        "usuario": {
            "id":`${userId}`,
        },
        "addressname": "",
        "name": "",
        "surname": "",
        "street": "",
        "floor": "",
        "postalcode": "",
        "city": "",
        "country": "",
        "province": "",
        "number": "",
        "comments": "",
        "preferred": false
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
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });
    function saveAddress(event) {
        event.preventDefault();
        swalWithBootstrapButtons.fire({
            title: '¿Estas seguro que quieres guardar la dirección?',
            text: "Tendrás que borrarla si te equivocas",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, creala!',
            cancelButtonText: 'No, cancela.',
          }).then((result) => {
            if (result.isConfirmed) {
                const peticion = axios.post(`http://localhost:8080/address/save`, addressToCreate)
            .then(response => {
                swalWithBootstrapButtons.fire(
                    'Has creado una dirección!',
                    'Puedes consultarla en tu perfil!',
                    'success'
                  )
                  setAddressToCreate(initialState);
            }
            )
            .catch(err => console.log(err));
              
            } else if (
              /* Read more about handling dismissals below */
              result.dismiss === Swal.DismissReason.cancel
            ) {
              swalWithBootstrapButtons.fire(
                'Cancelada',
                'Puedes volver a crear una cuando quieras',
                'error'
              )
            }
          })
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
                                <Link to={`/account/${user}`}>
                                    {user}
                                </Link>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item active>
                                Nueva Dirección
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="card p-5">
                    <div className="row justify-content-center">
                        <div className="col-12 mb-3">
                            <h1>Crear una nueva dirección</h1>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <Form onSubmit={() => saveAddress(event)}>
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
                                <Form.Group className="mb-3 d-flex flex-row ">
                                    <Form.Check name="preferred" className="me-2 " onChange={handleChange} value={addressToCreate.preferred} />
                                    <Form.Label>Dirección preferida</Form.Label>
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Guardar
                                </Button>
                            </Form>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AccountAddressCreate;