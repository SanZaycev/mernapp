import React from 'react';
import { NavLink } from 'react-router-dom';
import './Education.css';
import Inloader from "../../common/Inloader/Inloader";

const Education = (props) => {
    let onSubmit = e => { props.educationSubmit(e); };
    let onChangeField = e => { props.changeEducationFieldAC(e.target.name, e.target.value); };
    return(
        <div className="dashboard-profile">
            <div className="dashboard">
                <div className="lead-box"><NavLink className="back-btn" to="/dashboard"><span className="icon icon-chevron-left" /><span className="back-text">Назад</span></NavLink></div>
                <div className="dash-links">
                    <NavLink to="/update-profile" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-id-card-alt" /><span className="dash-text">Редактировать профиль</span></NavLink>
                    <NavLink to="/add-experience" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-briefcase"  /><span className="dash-text">Добавить опыт</span></NavLink>
                    <NavLink to="/add-education" className="col-md-4 col-sm-12 dash-tab active"><span className="icon icon-graduation-cap" /><span className="dash-text">Добавить образование</span></NavLink>
                </div>
                <p className="lead"><span className="fas fa-graduation-cap" />Добавьте учебные заведения, курсы, тренинги т.п.</p>
                <small>* обязательные поля</small>
                <form className="form education-form" onSubmit={e => onSubmit(e)}>
                    <Inloader boxLoad={props.boxLoad} />
                    <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="* Название учебного заведения" name="school" value={props.school} /></div>
                    <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="* Степень образования или сертификат" name="degree" value={props.degree} /></div>
                    <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="Что изучали" name="fieldofstudy" value={props.fieldofstudy} /></div>
                    <div className="form-group">
                        <h4>Дата начала обучения</h4>
                        <input type="date" onChange={e => onChangeField(e)} name="from" value={props.from} />
                    </div>
                    <div className="form-group">
                        <label><input type="checkbox" onChange={e => onChangeField(e)} name="current" value={props.current} />Сейчас обучаюсь в данном учебном заведении</label>
                    </div>
                    <div className="form-group">
                        <h4>Дата окончания обучения</h4>
                        <input type="date" onChange={e => onChangeField(e)} name="to" value={props.to} />
                    </div>
                    <div className="form-group"><textarea name="description" onChange={e => onChangeField(e)} cols="30" rows="5" placeholder="Program Description" value={props.description} /></div>
                    <button type="submit" className="btn btn-primary my-1">Добавить</button>
                    <NavLink className="btn btn-light my-1" to="/dashboard">Назад</NavLink>
                </form>
            </div>
        </div>
    );
};

export default Education;