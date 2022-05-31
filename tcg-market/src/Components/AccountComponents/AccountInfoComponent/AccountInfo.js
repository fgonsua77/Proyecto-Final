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
            
            <div className="d-flex col" class="userInfo" >
                <h4 className="font-link usernameTitle">{user.username}</h4>
                <Col>
                    <h5 className="font-link nameTitle">Nombre</h5>
                    <h5 className="font-link emailTitle">Correo Electrónico</h5>
                </Col>
                <Col>
                    <h5 className="font-link name">{user.name}</h5>
                    <h5 className="font-link email">{user.email}</h5>
                </Col>

            </div>
        </div>



    );
}
export default AccountInfo;