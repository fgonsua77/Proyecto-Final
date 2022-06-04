import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import './Accountinfo.css';

const AccountInfo = (props) => {
    const {user} = props;
    return (
        <>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h1 className="font-link">{user.username}</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Nombre : {user.name}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Apellido : {user.surname}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Email : {user.email}</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <h2>Fecha de registro : {user.registerdate}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </>);
};
            export default AccountInfo;