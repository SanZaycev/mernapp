import React from 'react';
import {NavLink} from 'react-router-dom';
import settings from 'settings';
import './Crumbs.css';

const Crumbs = () => {
    return(
        <div id="breadcrumbs">
            <ul className="crumbslist" itemScope="" itemType="https://schema.org/BreadcrumbList">
                <li className="crumb" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                    <NavLink className="crumb-link" to=""><meta itemProp="item" content={settings.PROJECT_DIR} /><span itemProp="name">Домашняя</span></NavLink>
                    <span className="separator">/</span><meta itemProp="position" content="1" />
                </li>
                <li className="crumb" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                    <NavLink className="crumb-link" to=""><meta itemProp="item" content="" /><span itemProp="name">Магазин</span></NavLink>
                    <span className="separator">/</span>
                    <meta itemProp="position" content="2" />
                </li>
                <li className="crumb current" itemProp="itemListElement" itemScope="" itemType="https://schema.org/ListItem">
                    <span className="crumb-link"><meta itemProp="item" content="[[*uri]]" /><span itemProp="name">Профиль</span><meta itemProp="position" content="3" /></span>
                </li>
            </ul>
        </div>
    );
};
export default Crumbs