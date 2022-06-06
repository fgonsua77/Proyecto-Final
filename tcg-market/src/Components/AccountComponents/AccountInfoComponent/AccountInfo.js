
import './Accountinfo.css';
import {useEffect, useState} from 'react';
const AccountInfo = (props) => {
    const user = props;

    return (
        <>
            <div className="card"> 
                <div className="card-header">
                    <h3 class="card-title">{user.username}</h3>
                </div>
                <div className="container card-body">
                    <h4 class="card-title">Nombre : {user.name}</h4>
                    <h4 class="card-title mb-3 ">Apellido : {user.surname}</h4>
                    <div class="card-subtitle text-muted">
                        <h5>Email : {user.email}</h5>
                        <h5>Fecha de registro : {user.registerdate}</h5>
                    </div>
                </div>
            </div>
        </>);
};
            export default AccountInfo;