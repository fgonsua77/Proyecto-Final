import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../../../Services/index";
import MyToast from "../../../MyToast";
const Register = (props) => {
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const initialState = {
        username: "",
        email: "",
        password: "",
        name: "",
        surname: "",
        birthdate: ""
    };


    const [user, setUser] = useState(initialState);

    const userChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };

    const dispatch = useDispatch();

    const saveUser = () => {
        console.log(user);
        dispatch(registerUser(user))
            .then((response) => {
                setShow(true);
                setMessage(response.message);
                navigate("/home");
                setTimeout(() => {
                    setShow(false);
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <form data-bitwarden-watching="1" className="d-flex justify-content-center mt-3">
            <div style={{ display: show ? "block" : "none" }}>
                <MyToast show={show} message={message} type={"success"} />
            </div>
            <fieldset>
                <h1 className="center">Formulario de registro</h1>
                <div className="form-group row mt-3">
                    <div className="col-sm-6">
                        <label for="nombre" className=" row-form-label">Nombre</label>
                        <input name="name" type="text" className="form-control" id="nombre" placeholder="Nombre"
                            onChange={userChange} />
                    </div>

                    <div className="col-sm-6">
                        <label for="apellidos" className="row-form-label">Apellidos</label>
                        <input name="surname" type="text" className="form-control" id="apellidos" placeholder="Apellidos"
                            onChange={userChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-12">
                        <label for="fechaNacimiento">Fecha de nacimiento</label>
                        <input name="birthdate" type="date" className="form-control " id="fechaNacimiento"
                            onChange={userChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-12">
                        <label for="email">Dirección de correo</label>
                        <input name="email" type="email" className="form-control " id="email" placeholder="example@txgmarket.com"
                            onChange={userChange} />
                    </div>
                </div>
                <div className="form-group row mt-3">
                    <div className="col-sm-10">
                        <label for="username" className="row-form-label">Nombre de usuario y contraseña</label>
                        <input name="username" type="text" className="form-control" id="username" placeholder="Nombre de usuario"
                            onChange={userChange} />
                    </div>
                    <div className="col-sm-10">
                        <input type="password" name="password" className="form-control" id="password" placeholder="Contraseña"
                            onChange={userChange} />
                    </div>
                    <div className="col-sm-10">
                        <input type="password" className="form-control" id="confirmPassword" placeholder="Confirma contraseña" />
                    </div>
                </div>
                <div className="form-group mt-3">
                    <label for="formFile" className="form-label">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary mt-3"
                    onClick={saveUser}
                >Submit</button>
            </fieldset>
        </form>
    );
};

export default Register;