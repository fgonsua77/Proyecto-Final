
import { Link } from 'react-router-dom';
import AccountAddress from '../AccountComponents/AccountAddress/AccountAddress';
import AccountInfo from '../AccountComponents/AccountInfoComponent/AccountInfo';
import AccountCredit from '../AccountComponents/AccountCredit/AccountCredit';
import { useState, useEffect } from 'react';
import { Breadcrumb} from "react-bootstrap";
const Account = (props) => {
    const {user} = props;
    const [usuario, setUsuario] = useState({});
    useEffect(() => {
        fetch(`http://localhost:8080/apiuser/usuarios/getuser/username=${user}`)
            .then((response) => response.json())
            .then((usuario) => setUsuario(usuario))
    }, []);
    console.log(usuario);
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
                                {user}
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                    <div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountInfo usuario={usuario} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountAddress usuario={usuario} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountCredit usuario={usuario} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Account;