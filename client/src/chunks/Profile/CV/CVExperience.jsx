import React from 'react';
import './CVExperience.css';

const CVExperience = (props) => {
    if(props.experience){
        const mapExp = props.experience.map((exp, index) => {
            return(
                <li key={index} className="exp-item">
                    <div className="exp-date"><div className="date-item">{exp.from && (<span className="from">{exp.from}</span>)}{exp.to ? <span className="to">&nbsp;-&nbsp;{exp.to}</span> : <span className="current">&nbsp;-&nbsp;По настоящее время</span> }</div></div>
                    { exp.title && (<div className="exp-title"><h3>{exp.title}</h3></div>)}
                    { exp.company && (<div className="exp-company"><h4>{exp.company}</h4></div>)}
                    { exp.location && (<div className="exp-location"><p>{exp.location}</p></div>)}
                    { exp.description && (<div className="exp-description"><p>{exp.description}</p></div>)}
                </li>
            );
        });
        return(
            <div className="profile-experience">
                <div className="profile-title"><h2>Опыт работы</h2></div>
                <ul className="exp-list">{mapExp}</ul>
            </div>
        );
    } else { return ''; }
};
export default CVExperience