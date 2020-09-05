import React from 'react';
import {NavLink} from 'react-router-dom';

const Landing = (props) => {
    return(
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                    <h1 className="x-large">Developer Connector</h1>
                    <p className="lead">
                        Create a developer profile/portfolio, share posts and get help from
                        other developers
                    </p>
                    <div className="buttons">
                        <NavLink to="/register" className="btn btn-primary">Регистрация</NavLink>
                        <NavLink to="/login" className="btn btn-light">Вход</NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Landing;