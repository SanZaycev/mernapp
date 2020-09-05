import React from 'react';
import {NavLink} from 'react-router-dom';

const Register = (props) => {
    let onSubmit = e => { props.onRegister(e); };
    let onChangeField = e => { props.changeFieldAC(e.target.name, e.target.value); };
    return (
        <form className="form" onSubmit={e => onSubmit(e)} >
            <h1 className="large text-primary">Регистрация</h1>
            <p className="lead"><span className="iconl icon-user"/>Создайте свой аккаунт</p>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="text" name="name" minLength="3" maxLength="20" placeholder="Имя" value={props.name} />
            </div>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="email" name="email" minLength="5" maxLength="30" placeholder="Email" value={props.email} />
                <small className="form-text">This site uses Gravatar so if you want a profile image, use a Gravatar email</small>
            </div>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="password" name="password" minLength="6" maxLength="30" placeholder="Пароль" value={props.password} />
            </div>
            <div className="form-group">
                <input onChange={e => onChangeField(e)} type="password" name="password2" minLength="6" maxLength="30" placeholder="Подтвердите пароль" value={props.password2} />
            </div>
            <button type="submit" className="btn btn-primary">Регистрация</button>
            <p className="my-1">Уже зарегестрированы?&nbsp;<NavLink to="/login">Вход</NavLink></p>
        </form>
    );
};

export default Register;