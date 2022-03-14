import { useRef, useState, useEffect} from 'react';
import axios from 'axios';
import './SignUpView.css';
const SIGNUP_URL = 'http://localhost:8080/apiuser/signup';

const SignUpView = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');
    const [nombre, setnombre] = useState('');
    const [email, setEmail] = useState('');
    const [JSON, setJSON] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password, nombre, email])

    const handleSubmit = async (e) => {
        e.preventDefault();
        setJSON({ username, email, nombre, password });
        console.log(JSON);
        try {
            const response = await axios.post(SIGNUP_URL,
                JSON.stringify({ username, email, nombre, password })
            );
            console.log(JSON.stringify(response?.data));
            setusername('');
            setpassword('');
            setEmail('');
            setnombre('');
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
                <p class="d-flex justify-content-center p-6"ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
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
                                    id="nombre" 
                                    aria-describedby="nameHelp" 
                                    placeholder="Enter nombre"
                                    ref={userRef}
                                    autoComplete="off"
                                    onChange={(e) => setnombre(e.target.value)}
                                    value={nombre}
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
                                    onChange={(e) => setusername(e.target.value)}
                                    value={username}
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
                                    onChange={(e) => setpassword(e.target.value)}
                                    value={password}
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