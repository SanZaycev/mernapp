import React from 'react';
import {NavLink} from 'react-router-dom';
import './PrimaryNav.css';

const PrimaryNav = (props) => {
    return(
        <section className="container primary-nav">
            <div className="header-row">
                <nav className="site-nav">
                    <ul className="nav-tabs">
                        <li className="tab"><NavLink className={props.isJobs ? "tab-link active" : "tab-link"} to="/jobs">Вакансии</NavLink></li>
                        <li className="tab"><NavLink className={props.isProfile ? "tab-link active" : "tab-link"} to="/dashboard">Профиль</NavLink></li>
                        <li className="tab"><NavLink className={props.isUsers ? "tab-link active" : "tab-link"} to="/profiles">Специалисты</NavLink></li>
                    </ul>
                </nav>
            </div>
        </section>
    );
};
export default PrimaryNav