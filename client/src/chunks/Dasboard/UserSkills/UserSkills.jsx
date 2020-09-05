import React from 'react';
import './UserSkills.css';

const UserSkills = (props) => {
    if(props.skills){
        const mapSkills = props.skills.map((skill, index) =><li key={index} className="skill"><span className="icon icon-check" /><span className="skill-text">{skill}</span></li>);
        return(
            <div className="profile-skills">
                <div className="profile-title"><h2>Навыки</h2></div>
                <ul className="skills-list">{mapSkills}</ul>
            </div>
        );
    } else { return ''; }
};
export default UserSkills