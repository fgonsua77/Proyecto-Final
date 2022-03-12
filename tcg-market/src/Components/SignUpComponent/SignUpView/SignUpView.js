import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './SignUpView.css';
const SIGNUP_URL = 'http://localhost:8080/apiuser/signin';

const SignUpView = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(SIGNUP_URL,
                JSON.stringify({ user, pwd, name, email }),
                {
                    headers: { 'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With",
                    'Access-Control-Allow-Credentials' : "true"}
                }
            );
            console.log(JSON.stringify(response?.data));
            setUser('');
            setPwd('');
            setEmail('');
            setName('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No hay respuesta del servidor');
            } else if (err.response?.status === 400) {
                setErrMsg('Falta un elemento');
            } else {
                setErrMsg('Registro fallido');
            }
            errRef.current.focus();
        }
    }

    return (
            <>
            {success ? (
                <section>
                    <h1>Se te ha registrado!</h1>
                    <br />
                    <p>
                        <a href="/login">Inicia sesión</a>
                    </p>
                </section>
            ): (
                <div className="login-view">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="login-view-container">
                    <div className="login-view-header d-flex justify-content-center">
                        <h1>Registro</h1>
                    </div>
                    <div className="login-view-body d-flex justify-content-center">
                        <form onSubmit={handleSubmit}>
                        <div className="form-group p-3">
                                <label htmlFor="name">Nombre</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="name" 
                                aria-describedby="nameHelp" 
                                placeholder="Enter name"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required />
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="username">Nombre de usuario</label>
                                <input 
                                type="text" 
                                className="form-control" 
                                id="username" 
                                aria-describedby="usernameHelp" 
                                placeholder="Enter username"
                                ref={userRef}
                                autoComplete="off"
                                onChange={(e) => setUser(e.target.value)}
                                value={user}
                                required />
                                <small id="usernameHelp" className="form-text text-muted">No se compartirá tu nombre de usuario.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required />
                            </div>
                            <div className="form-group p-3">
                                <label htmlFor="email">Correo Electrónico</label>
                                <input 
                                type="email" 
                                className="form-control" 
                                id="email" 
                                aria-describedby="emailHelp" 
                                placeholder="Enter email"
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required />
                            </div>
                            <button type="submit" className="btn btn-primary">Registrarme</button>
                        </form>

                        </div>
                    </div>
                </div>
                )
            }
            
            </>
            
        );
    }

export default SignUpView;