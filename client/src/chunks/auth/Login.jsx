import React from 'react';
import {NavLink} from 'react-router-dom';

const Login = (props) => {
    let onSubmit = e => { props.onLogin(e); };
    let onChangeField = e => { props.changeFieldAC(e.target.name, e.target.value); };
    return (
        <form className="form" onSubmit={e => onSubmit(e)}>
            <h1 className="large text-primary">Вход</h1>
            <p className="lead"><span className="iconl icon-user"/>Войдите в свой аккаунт</p>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="email" name="email" minLength="5" maxLength="30" placeholder="Email" value={props.email} />
            </div>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="password" name="password" minLength="6" maxLength="30" placeholder="Пароль" value={props.password} />
            </div>
            <button type="submit" className="btn btn-primary">Вход</button>
            <p className="my-1">У Вас нет аккаунта?&nbsp;<NavLink to="/register">Регистрация</NavLink></p>
        </form>
    );
};

export default Login;