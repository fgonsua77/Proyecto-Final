import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';
import './LoginView.css';
import AuthContext from "./Context/AuthProvider";
const LOGIN_URL = 'http://localhost:8080/apiuser/signin';

const LoginView = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
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
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ user, pwd }),
                {
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded',
                    "Access-Control-Allow-Origin" : "*",
                    "Access-Control-Allow-Methods" : "DELETE, POST, GET, OPTIONS",
                    "Access-Control-Allow-Headers" : "Content-Type, Authorization, X-Requested-With",
                    'Access-Control-Allow-Credentials' : "true"}
                    .withCredentials(true)
                }
            );
            console.log(JSON.stringify(response?.data));
            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            setSuccess(true);
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
            <>
            {success ? (
                <section>
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/home">Go to Home</a>
                    </p>
                </section>
            ): (
                <div className="login-view">
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <div className="login-view-container">
                    <div className="login-view-header d-flex justify-content-center">
                        <h1>Login</h1>
                    </div>
                    <div className="login-view-body d-flex justify-content-center">
                        <form onSubmit={handleSubmit}>
                            <div className="form-group p-3">
                                <label htmlFor="username">Username</label>
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
                                <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input 
                                type="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="Password"
                                onChange={(e) => setPwd(e.target.value)}
                                value={pwd}
                                required />
                            </div>
                            <div className="form-group form-check">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                            </div>
                            <button type="submit" className="btn btn-primary">Login</button>
                            <div className="login-view-footer">
                            <p>Don't have an account? <a href="/register">Register</a></p>
                            </div>
                            
                        </form>

                        </div>
                    </div>
                </div>
                )
            }
            
            </>
            
        );
    }

export default LoginView;