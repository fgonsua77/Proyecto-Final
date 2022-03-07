import { useState } from 'react';
import './LoginView.css';
function LoginView () {
    const adminUser = {
        username: 'admin',
        password: 'admin'
    }

    return (

        <div className="login-view">
            <div className="login-view-container">
                <div className="login-view-header">
                    <h1>Login</h1>
                </div>
                <div className="login-view-body">
                    <form>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="text" className="form-control" id="username" aria-describedby="usernameHelp" placeholder="Enter username" />
                            <small id="usernameHelp" className="form-text text-muted">We'll never share your username with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                            <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                        </div>
                        <button type="submit" className="btn btn-primary">Login</button>
                    </form>
                    <div className="login-view-footer">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginView;