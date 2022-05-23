import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import './Accountinfo.css';

const AccountInfo = (props) => {
    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("id");
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/userid=${userId}`)
            .then((response) => response.json())
            .then((user) => setUser(user))
            .then(console.log(user));
    }, []);
    return (
        <div className="d-flex row justify-content-center">
            <ul class="nav nav-pills flex-column d-flex col">
                <li class="nav-item">
                    <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="#">Separated link</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#">Disabled</a>
                </li>
            </ul>
            <div className="d-flex col" class="userInfo" >
                <h4 class="usernameTitle">{user.username}</h4>
                <Col>
                    <h5 class="nameTitle">Nombre</h5>
                    <h5 class="emailTitle">Correo Electrónico</h5>
                </Col>
                <Col>
                    <h5 class="name">{user.name}</h5>
                    <h5 class="email">{user.email}</h5>
                </Col>

            </div>
        </div>



    );
}
export default AccountInfo;