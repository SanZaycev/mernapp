import React from 'react';
import './Profile.css';
import {NavLink} from 'react-router-dom';
import CVExperience from './CV/CVExperience';
import CVEducation from './CV/CVEducation';
import CVSkills from './CV/CVSkills';
import Inloader from "../common/Inloader/Inloader";

const Profile = (props) => {
    return (
        <div className="profile">
            <Inloader boxLoad={props.boxLoad} />
            <div className="load-container">
                <div className="profile-about">
                    <div className="profile-title"><h2>Обо мне</h2></div>
                    {props.bio && (<div className="bio-box"><p className="bio-text">{props.bio}</p></div>)}
                    <div className="profile-info">
                        <ul className="info-list">
                        {props.website ? <li className="info-row"><span className="icon icon-globe" /><span className="info-text">{props.website}</span></li> : null }
                        {props.location ? <li className="info-row"><span className="icon icon-map-marker-alt" /><span className="info-text">{props.location}</span></li> : null }
                        {props.status ? <li className="info-row"><span className="iconl icon-comment" /><span className="info-text">{props.status}</span></li> : null }
                        </ul>
                    </div>
                </div>
                <CVSkills skills={props.skills} />
                <CVExperience experience={props.experience} />
                <CVEducation education={props.education} />

                <div className="profile-github">
                    <h2 className="text-primary my-1"><span className="iconb icon-github" />Github Repos</h2>
                    <div className="repo bg-white p-1 my-1">
                        <div>
                            <h4><NavLink to="#" target="_blank" rel="noopener noreferrer">Repo One</NavLink></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, laborum!</p>
                        </div>
                        <div>
                            <ul>
                                <li className="badge badge-primary">Stars: 44</li>
                                <li className="badge badge-dark">Watchers: 21</li>
                                <li className="badge badge-light">Forks: 25</li>
                            </ul>
                        </div>
                    </div>
                    <div className="repo bg-white p-1 my-1">
                        <div>
                            <h4><NavLink to="#" target="_blank" rel="noopener noreferrer">Repo Two</NavLink></h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, laborum!</p>
                        </div>
                        <div>
                            <ul>
                                <li className="badge badge-primary">Stars: 44</li>
                                <li className="badge badge-dark">Watchers: 21</li>
                                <li className="badge badge-light">Forks: 25</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Profile;
