import React from 'react';
import { NavLink } from 'react-router-dom';
import './Experience.css';
import Inloader from "../../common/Inloader/Inloader";

const Experience = (props) => {
  let onSubmit = e => { props.experienceSubmit(e); };
  let onChangeField = e => { props.changeExperienceFieldAC(e.target.name, e.target.value); };
  return(
      <div className="dashboard-profile">
        <div className="dashboard">
          <div className="lead-box"><NavLink className="back-btn" to="/dashboard"><span className="icon icon-chevron-left" /><span className="back-text">Назад</span></NavLink></div>
          <div className="dash-links">
            <NavLink to="/update-profile" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-id-card-alt" /><span className="dash-text">Редактировать профиль</span></NavLink>
            <NavLink to="/add-experience" className="col-md-4 col-sm-12 dash-tab active"><span className="icon icon-briefcase"  /><span className="dash-text">Добавить опыт</span></NavLink>
            <NavLink to="/add-education" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-graduation-cap" /><span className="dash-text">Добавить образование</span></NavLink>
          </div>
          <p className="lead"><span className="fas fa-code-branch" />Добавьте любые рабочие позиции, которые у вас были в прошлом</p>
          <small>* обязательные поля для заполнения</small>
          <form className="form experience-form" onSubmit={e => onSubmit(e)}>
            <Inloader boxLoad={props.boxLoad} />
            <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="* Специализация / Должность" name="title" value={props.title} /></div>
            <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="* Компания" name="company" value={props.company} /></div>
            <div className="form-group"><input type="text" onChange={e => onChangeField(e)} placeholder="Адрес" name="location" value={props.location} /></div>
            <div className="form-group">
              <h4>Дата начала работы</h4>
              <input type="date" onChange={e => onChangeField(e)} name="from" value={props.from} />
            </div>
            <div className="form-group">
              <label><input type="checkbox" onChange={e => onChangeField(e)} name="current" value={props.current} />Сейчас работаю в данной компании</label>
            </div>
            <div className="form-group">
              <h4>Дата окончания работы</h4>
              <input type="date"  onChange={e => onChangeField(e)} name="to" value={props.to} />
            </div>
            <div className="form-group"><textarea name="description" onChange={e => onChangeField(e)} cols="30" rows="5" placeholder="Короткое описание, обязанности, роль в компании" value={props.description} /></div>
            <button type="submit" className="btn btn-primary my-1">Добавить</button>
            <NavLink className="btn btn-light my-1" to="/dashboard">Назад</NavLink>
          </form>
        </div>
      </div>
  );
};

export default Experience