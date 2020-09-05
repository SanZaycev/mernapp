import React from 'react';
import './Worker.css';
import {NavLink} from "react-router-dom";
import emptyAvatar from '../../../../assets/images/empty-avatar.png';

const Worker = (profile) => {
    return(
        <div className="worker-item">
            <div className="worker-content">
                <p className="worker-rating"><span className="iconl icon-star" /><span className="num">4.7</span></p>
                <NavLink className="worker-link" to={`/profile/${profile.user._id}`}><img className="worker-thumb" src={profile.user.avatar ? profile.user.avatar : emptyAvatar} alt={profile.user.name && profile.user.name} /></NavLink>
                <div className="worker-info">
                    <div className="name-box">
                        {profile.user && profile.user.name && (<h4><NavLink className="worker-link" to={`/profile/${profile.user._id}`}>{profile.user.name}</NavLink></h4>)}
                        {profile.profession && (<h5>{profile.profession}</h5>)}
                    </div>
                    <div className="meta-box">
                        {profile.location && (<p className="worker-location"><span className="icon icon-map-marker-alt" />{profile.location}</p>)}
                    </div>
                </div>
            </div>
            <div className="worker-body">
                <div className="status-box">
                    {profile.status && (<p className="worker-status">{profile.status}</p>)}
                </div>
                <div className="worker-skills">
                    {profile.skills && (<div className="tag-list">{profile.skills.slice(0,4).map((skill, index) =><span key={index} className="tag">{skill}</span>)}</div>)}
                    <div className="worker-experience">
                        <NavLink to={`/profile/${profile.user._id}`} className="experience-btn">Профиль</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Worker