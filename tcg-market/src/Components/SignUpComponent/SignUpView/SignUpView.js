import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../Services/index";
const Register = (props) => {
    const navigate = useNavigate();
    const initialState = {
        username: "",
        email: "",
        password: "",
        name: "",
        surname: "",
        birthdate: "",
        status: 1,
    };


    const [user, setUser] = useState(initialState);

    const userChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();

    const saveUser = (event) => {
        event.preventDefault();
        console.log(user);
        dispatch(registerUser(user))
            .then((response) => {
                Swal.fire(
                    'Se ha añadido la venta con exito',
                    'Siga comprando!',
                    'success'
                  )
                setShow(true);
                setMessage(response.message);
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            })
            .catch((error) => {
                Swal.fire(
                    'Ha habido un error en el registro',
                    'Siga comprando!',
                    'error'
                  )
                console.log(error);
            });
    };
    return (
        <form data-bitwarden-watching="1" className="d-flex justify-content-center mt-3" onSubmit={() => saveUser(event)}>

            <fieldset className="card p-4">
                <h1 className="center">Formulario de registro</h1>
                <div className="form-group row mt-3">
                    <div className="col-sm-6">
                        <label for="nombre" className="font-link row-form-label">Nombre</label>
                        <input name="name" type="text" className="form-control" id="nombre" placeholder="Nombre"
                            onChange={userChange} required/>
                    </div>

                    <div className="col-sm-6">
                        <label for="apellidos" className="font-link row-form-label">Apellidos</label>
                        <input name="surname" type="text" className="form-control" id="apellidos" placeholder="Apellidos"
                            onChange={userChange} required />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-12">
                        <label for="fechaNacimiento">Fecha de nacimiento</label>
                        <input name="birthdate" type="date" className="form-control " id="fechaNacimiento"
                            onChange={userChange} required />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-12">
                        <label for="email" className="font-link">Dirección de correo</label>
                        <input name="email" type="email" className="form-control " id="email" placeholder="example@txgmarket.com"
                            onChange={userChange} required />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-10 mb-2">
                        <label for="username" className="font-link row-form-label">Nombre de usuario y contraseña</label>
                        <input name="username" type="text" className="form-control" id="username" placeholder="Nombre de usuario"
                            onChange={userChange} required />
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Contraseña"
                            onChange={userChange} required />
                    </div>
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3">Registrarse</button>
            </fieldset>
        </form>
    );
};

export default Register;