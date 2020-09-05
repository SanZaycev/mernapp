import React from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import logo from "../../../assets/images/applogo.png";

const NavOut = (props) => {
    return(
        <header className="apphead">
            <div className="sticknav">
                <div className="container nav-wrap">
                    <nav className="usernav">
                        <div className="logo-box"><NavLink to="/" className="logo-link"><img className="site-logo" src={logo} alt="iworky logo" /></NavLink></div>
                        <div className="user-box"><div className="user-info"><NavLink className="auth-link" to="/login">Вход</NavLink><NavLink className="auth-link" to="/register">Регистрация</NavLink></div></div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavOut;