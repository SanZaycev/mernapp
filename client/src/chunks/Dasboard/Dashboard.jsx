import React from 'react';
import {NavLink} from 'react-router-dom';
import UserSkills from './UserSkills/UserSkills';
import UserEducation from './UserEducation/UserEducation';
import UserExperience from './UserExperience/UserExperience';
import './Dashboard.css';
import Inloader from "../common/Inloader/Inloader";

const Dashboard = (props) => {
    if (!props.isProfile){
        return (
            <div className="profile">
                <div className="dashboard">
                    <Inloader boxLoad={props.boxLoad} />
                    <h1 className="large text-primary">Профиль</h1>
                    <p className="lead"><span className="iconl icon-user"/>Добро пожаловать&nbsp;{props.name ? props.name : null}</p>
                    <p className="setup-info">Ваш профиль не заполнен. Заполните данные о себе, чтобы пользоваться всеми возможностями Iworky</p>
                    <NavLink to="/update-profile" className="btn btn-success">Я специалист</NavLink>
                    <NavLink to="/update-employer" className="btn btn-success">Я работодатель</NavLink>
                </div>
            </div>
        );
    }
    else {
        return (
            <div className="dashboard-profile">
                <div className="dashboard">
                    {props.name && (<div className="lead-box"><h1 className="lead-title"><span className="iconl icon-user"/>Добро пожаловать&nbsp;<span className="lead-name">{props.name}</span></h1></div>)}
                    <div className="dash-links">
                        <NavLink to="/update-profile" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-id-card-alt" /><span className="dash-text">Редактировать профиль</span></NavLink>
                        <NavLink to="/add-experience" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-briefcase"  /><span className="dash-text">Добавить опыт</span></NavLink>
                        <NavLink to="/add-education" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-graduation-cap" /><span className="dash-text">Добавить образование</span></NavLink>
                    </div>
                </div>
                <div className="load-container">
                    <Inloader boxLoad={props.boxLoad} />
                    <div className="profile-about">
                        <div className="profile-title"><h2>Обо мне</h2></div>
                        { props.bio ? <div className="bio-box"><p className="bio-text">{props.bio}</p></div> : null }
                        <div className="profile-info">
                            <ul className="info-list">
                            { props.website ? <li className="info-row"><span className="icon icon-globe" /><span className="info-text">{props.website}</span></li> : null }
                            { props.location ? <li className="info-row"><span className="icon icon-map-marker-alt" /><span className="info-text">{props.location}</span></li> : null }
                            { props.status ? <li className="info-row"><span className="iconl icon-comment" /><span className="info-text">{props.status}</span></li> : null }
                            </ul>
                        </div>
                    </div>
                    <UserSkills skills={props.skills} />
                    <UserExperience experience={props.experiences} deleteExperience={props.deleteExperience}/>
                    <UserEducation education={props.educations} deleteEducation={props.deleteEducation} />
                </div>
            </div>
        );
    }
};

export default Dashboard;