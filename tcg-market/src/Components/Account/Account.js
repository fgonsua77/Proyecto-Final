
import { Link } from 'react-router-dom';
import AccountAddress from '../AccountComponents/AccountAddress/AccountAddress';
import AccountInfo from '../AccountComponents/AccountInfoComponent/AccountInfo';
import AccountCredit from '../AccountComponents/AccountCredit/AccountCredit';
import { useState, useEffect } from 'react';
import { Breadcrumb} from "react-bootstrap";
const Account = (props) => {
    const {user} = props;
    
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
                                {user.username}
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
                                <AccountAddress user={user} />
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-12 p-5">
                                <AccountCredit credit={user.credit} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Account;