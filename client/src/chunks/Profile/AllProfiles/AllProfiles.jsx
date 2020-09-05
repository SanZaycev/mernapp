import React from 'react';
import './AllProfiles.css';
import Worker from "./Worker/Worker";

const AllProfiles = (props) => {
    let layout;
    if(props.profiles.length > 0){ layout = props.profiles.map(profile =><Worker key={profile.user._id} { ...profile } />); }
    else{ layout = <h3>Специалистов не найдено</h3>; }
    return (
        <div className="profiles-container">
            <h1 className="large text-primary">Developers</h1>
            <p className="lead"><span className="iconb icon-connectdevelop"/>Browse and connect with developers</p>
            <div className="profiles">{layout}</div>
        </div>
    );
};
export default AllProfiles