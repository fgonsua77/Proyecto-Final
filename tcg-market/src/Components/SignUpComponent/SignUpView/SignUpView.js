import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUndo, faUserPlus, faUser} from "@fortawesome/free-solid-svg-icons";
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
    nombre: "",
};

const [user, setUser] = useState(initialState);

const userChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
};

const dispatch = useDispatch();

const saveUser = () => {
    dispatch(registerUser(user))
    .then((response) => {
        setShow(true);
        setMessage(response.message);
        resetRegisterForm();
        navigate("/");
        setTimeout(() => {
        setShow(false);
        }, 2000);
    })
    .catch((error) => {
        console.log(error);
    });
};

const resetRegisterForm = () => {
    setUser(initialState);
};

return (
    <div>
    <div style={{ display: show ? "block" : "none" }}>
        <MyToast show={show} message={message} type={"success"} />
    </div>
    <Row className="justify-content-md-center">
        <Col xs={5}>
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
            <FontAwesomeIcon icon={faUserPlus} /> Register
            </Card.Header>
            <Card.Body>
            <Row>
                <Form.Group as={Col}>
                <InputGroup>
                    <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    </InputGroup>
                    <FormControl
                    autoComplete="off"
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={userChange}
                    className={"bg-white text-dark"}
                    placeholder="Enter Name"
                    />
                </InputGroup>
                </Form.Group>
            </Row>
            <Form>
                <Form.Group as={Col}>
                <InputGroup>
                    <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelope} />
                    </InputGroup.Text>
                    </InputGroup>
                    <FormControl
                    required
                    autoComplete="off"
                    type="text"
                    name="email"
                    value={user.email}
                    onChange={userChange}
                    className={"bg-white text-dark"}
                    placeholder="Enter Email Address"
                    />
                </InputGroup>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Col}>
                <InputGroup>
                    <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faLock} />
                    </InputGroup.Text>
                    </InputGroup>
                    <FormControl
                    required
                    autoComplete="off"
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={userChange}
                    className={"bg-white text-dark"}
                    placeholder="Enter Password"
                    />
                </InputGroup>
                </Form.Group>
            </Form>
            <Form>
                <Form.Group as={Col}>
                <InputGroup>
                    <InputGroup>
                    <InputGroup.Text>
                        <FontAwesomeIcon icon={faUser} />
                    </InputGroup.Text>
                    </InputGroup>
                    <FormControl
                    autoComplete="off"
                    type="text"
                    name="nombre"
                    value={user.nombre}
                    onChange={userChange}
                    className={"bg-white text-dark"}
                    placeholder="Introduzca nombre"
                    />
                </InputGroup>
                </Form.Group>
            </Form>
            </Card.Body>
            <Card.Footer style={{ textAlign: "right" }}>
            <Button
                size="sm"
                type="button"
                variant="success"
                onClick={saveUser}
                disabled={user.email.length === 0 || user.password.length === 0}
            >
                <FontAwesomeIcon icon={faUserPlus} /> Registrate
            </Button>{" "}
            <Button
                size="sm"
                type="button"
                variant="info"
                onClick={resetRegisterForm}
            >
                <FontAwesomeIcon icon={faUndo} /> Reset
            </Button>
            </Card.Footer>
        </Card>
        </Col>
    </Row>
    </div>
);
};

export default Register;