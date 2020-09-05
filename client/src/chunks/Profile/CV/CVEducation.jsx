import React from 'react';
import './CVEducation.css';

const CVEducation = (props) => {
    if(props.education){
        const mapEdu = props.education.map((edu, index) => {
            return(
                <li key={index} className="edu-item">
                    <div className="edu-date"><div className="date-item">{edu.from && (<span className="from">{edu.from}</span>)}{edu.to ? <span className="to">&nbsp;-&nbsp;{edu.to}</span> : <span className="current">&nbsp;-&nbsp;По настоящее время</span> }</div></div>
                    { edu.degree && (<div className="edu-degree"><h3>{edu.degree}</h3></div>)}
                    { edu.school && (<div className="edu-school"><h4>{edu.school}</h4></div>)}
                    { edu.fieldofstudy && (<div className="edu-fieldofstudy"><p>{edu.fieldofstudy}</p></div>)}
                    { edu.description && (<div className="edu-description"><p>{edu.description}</p></div>)}
                </li>
            );
        });
        return(
            <div className="profile-education">
                <div className="profile-title"><h2>Дипломы и курсы</h2></div>
                <ul className="edu-list">{mapEdu}</ul>
            </div>
        );
    } else { return ''; }
};
export default CVEducation