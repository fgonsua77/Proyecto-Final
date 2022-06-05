
import { Link } from 'react-router-dom';
import AccountAddress from '../AccountComponents/AccountAddress/AccountAddress';
import AccountInfo from '../AccountComponents/AccountInfoComponent/AccountInfo';
import { useState, useEffect } from 'react';
import { Breadcrumb} from "react-bootstrap";
const Account = () => {
    const username = localStorage.getItem('username');
    const [user, setUser] = useState({});
    const userId = localStorage.getItem("id");
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/userid=${userId}`)
            .then((response) => response.json())
            .then((user) => setUser(user))
            .then(console.log(user));
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
                            <Breadcrumb.Item active>
                                {username}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountInfo user={user} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountAddress iduser={userId} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Account;