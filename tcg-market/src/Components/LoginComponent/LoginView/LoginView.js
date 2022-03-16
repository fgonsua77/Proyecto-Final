import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import FormControl from 'react-bootstrap/FormControl';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSignInAlt, faEnvelope, faLock, faUndo } from "@fortawesome/free-solid-svg-icons";
import { authenticateUser } from "../../../Services/index";

const Login = (props) => {
const [error, setError] = useState();
const [show, setShow] = useState(true);
const navigate = useNavigate();
const initialState = {
    username: "",
    password: "",
};

const [user, setUser] = useState(initialState);

const credentialChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
};

const dispatch = useDispatch();

const validateUser = () => {
    dispatch(authenticateUser(user.username, user.password))
    .then((response) => {
        console.log(response.data);
        navigate("/");
    })
    .catch((error) => {
        console.log(error.message);
        setShow(true);
        resetLoginForm();
        setError("Invalid username and password");
    });
};

const resetLoginForm = () => {
    setUser(initialState);
};

return (
    <Row className="justify-content-md-center">
    <Col xs={5}>
        {show && props.message && (
        <Alert variant="success" onClose={() => setShow(false)} dismissible>
            {props.message}
        </Alert>
        )}
        {show && error && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
            {error}
        </Alert>
        )}
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>
            <FontAwesomeIcon icon={faSignInAlt} /> Login
        </Card.Header>
        <Card.Body>
            <Row>
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
                    name="username"
                    value={user.username}
                    onChange={credentialChange}
                    className={"bg-dark text-white"}
                    placeholder="Introduce tu nombre de usuario"
                />
                </InputGroup>
            </Form.Group>
            </Row>
            <Row>
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
                    onChange={credentialChange}
                    className={"bg-dark text-white"}
                    placeholder="Introduce tu contraseña"
                />
                </InputGroup>
            </Form.Group>
            </Row>
        </Card.Body>
        <Card.Footer style={{ textAlign: "right" }}>
            <Button
            size="sm"
            type="button"
            variant="success"
            onClick={validateUser}
            disabled={user.username.length === 0 || user.password.length === 0}
            >
            <FontAwesomeIcon icon={faSignInAlt} /> Login
            </Button>{" "}
            <Button
            size="sm"
            type="button"
            variant="info"
            onClick={resetLoginForm}
            disabled={user.username.length === 0 && user.password.length === 0}
            >
            <FontAwesomeIcon icon={faUndo} /> Reset
            </Button>
        </Card.Footer>
        </Card>
    </Col>
    </Row>
);
};

export default Login;