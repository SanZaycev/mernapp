import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import './Nav.css';
import logo from '../../../assets/images/applogo.png';
import emptyAvatar from '../../../assets/images/empty-avatar.png';

const NavIn = (props) => {
    let avatar = props.user && props.user.avatar ? props.user.avatar : emptyAvatar;
    const [isToggle, toggleNav] = useState(false);
    const onLogout = () => {
        props.logoutAC();
        props.clearProfileAC();
        props.clearExperienceAC();
        props.clearEducationAC();
    };
    return(
        <header className="apphead">
            <div className="sticknav">
                <div className="container nav-wrap">
                    <nav className="usernav">
                        <div className="logo-box"><NavLink to="/" className="logo-link"><img className="site-logo" src={logo} alt="iworky logo" /></NavLink></div>
                        <div className="user-box">
                            {props.user && props.isAuth && (<div className="user-info"><span className="avatar" style={{backgroundImage: 'url(' + avatar + ')'}} />{props.user.name && (<span onClick={()=>toggleNav(!isToggle)} className="username">{props.user.name}</span>)}</div>)}
                            <ul className={isToggle ? "user-menu open" : "user-menu" }>
                                <li className="menu-item"><span className="iconl icon-user" /><NavLink to="/dashboard" className="menu-link">Мой профиль</NavLink></li>
                                <li className="menu-item"><span className="icon icon-cg" /><NavLink to="/settings" className="menu-link">Настройки</NavLink></li>
                                <li className="menu-item"><span className="icon icon-exit" /><NavLink onClick={ () => onLogout()}  to="/login" className="menu-link">Выход</NavLink></li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default NavIn;