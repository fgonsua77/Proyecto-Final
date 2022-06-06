
import './Accountinfo.css';
import {useEffect, useState} from 'react';
const AccountInfo = (props) => {
    const {usuario} = props;

    return (
        <>
            <div className="card"> 
                <div className="card-header">
                    <h3 class="card-title">{usuario.username}</h3>
                </div>
                <div className="container card-body">
                    <h4 class="card-title">Nombre : {usuario.name}</h4>
                    <h4 class="card-title mb-3 ">Apellido : {usuario.surname}</h4>
                    <div class="card-subtitle text-muted">
                        <h5>Email : {usuario.email}</h5>
                        <h5>Fecha de registro : {usuario.registerdate}</h5>
                    </div>
                </div>
            </div>
        </>);
};
            export default AccountInfo;