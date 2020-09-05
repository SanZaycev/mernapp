import React from 'react';
import {NavLink} from 'react-router-dom';
import './Sidebar.css';
import emptyAvatar from '../../assets/images/empty-avatar.png';
import AvatarUpload from "../common/Uploader/AvatarUpload";

const Sidebar = (props) => {
    return(
        <div id="uside" className="col-sm-12 col-md-5 col-lg-3">
            <aside className="profile-sidebar">
                <div className="sidebar_inner">
                    <div className="user-widget">
                        <div className="widget-body">
                            <div className="widget-avatar">
                                <img className="avatar avatar-195" src={props.avatar ? props.avatar : emptyAvatar } alt="Avatar" />
                                <AvatarUpload setAlert={props.setAlert} />
                            </div>
                        </div>
                        <div className="widget-info">
                            <div className="info-content">
                                {props.name && (<h2 className="profile-name">{props.name}</h2>)}
                                {props.profession && (<p className="profile-profy">{props.profession}</p>)}
                                <ul className="profile-social">
                                    {props.telegram && (<li className="social-item"><NavLink to={props.telegram} className="social-link"><span className="iconb icon-telegram" /></NavLink></li>)}
                                    {props.vk && (<li className="social-item"><NavLink to={props.vk} className="social-link"><span className="iconb icon-vk" /></NavLink></li>)}
                                    {props.linkedin && (<li className="social-item"><NavLink to={props.linkedin} className="social-link"><span className="iconb icon-linkedin" /></NavLink></li>)}
                                    {props.twitter && (<li className="social-item"><NavLink to={props.twitter} className="social-link"><span className="iconb icon-twitter" /></NavLink></li>)}
                                    {props.instagram && (<li className="social-item"><NavLink to={props.instagram} className="social-link"><span className="iconb icon-instagram" /></NavLink></li>)}
                                    {props.facebook && (<li className="social-item"><NavLink to={props.facebook} className="social-link"><span className="iconb icon-facebook" /></NavLink></li>)}
                                    {props.youtube && (<li className="social-item"><NavLink to={props.youtube} className="social-link"><span className="iconb icon-youtube" /></NavLink></li>)}
                                </ul>
                            </div>
                            <div className="download-cv-box">
                                <button className="download-btn">Скачать резюме</button>
                            </div>
                        </div>
                    </div>
                    <div className="profile-widget">
                        <div id="wnav" className="profile-nav">
                            <ul className="nav-list">
                                <li className="nav-item current"><span className="iconl icon-user" /><NavLink to="/profile:uid" className="nav-link">Профиль</NavLink></li>
                                <li className="nav-item"><span className="icon icon-blog" /><NavLink to="/posts" className="nav-link">Блог</NavLink></li>
                                <li className="nav-item"><span className="iconl icon-star" /><NavLink to="/reviews:uid" className="nav-link">Отзывы</NavLink></li>
                            </ul>
                            <ul className="nav-list auth-list">
                                <li className="nav-item"><span className="iconl icon-comment" /><NavLink to="messages" className="nav-link">Сообщения</NavLink><span className="num">17</span></li>
                                <li className="nav-item"><span className="iconl icon-heart" /><NavLink to="stars" className="nav-link">Избранное</NavLink></li>
                                <li className="nav-item"><span className="icon icon-bullhorn" /><NavLink to="events" className="nav-link">Уведомления</NavLink><span className="num">244</span></li>
                            </ul>
                        </div>
                    </div>
                    <div className="profile-widget">
                        <div className="profile-share">
                            <div className="share-text">Сохранить страницу автора</div>
                            <ul className="social-list">
                                <li className="social-item">
                                    <div id="js-vkbtn" className="social-btn" title="Поделиться ссылкой во ВКонтакте"
                                         data-url="" data-label="Вконтакте"
                                         data-image=""
                                         data-media=""
                                         data-title="">
                                        <span className="iconb icon-vk" />
                                    </div>
                                </li>
                                <li className="social-item">
                                    <div id="js-okbtn" className="social-btn" title="Поделиться ссылкой во ВКонтакте"
                                         data-url="" data-label="Вконтакте"
                                         data-image=""
                                         data-media=""
                                         data-title="">
                                        <span className="iconb icon-odnoklassniki" />
                                    </div>
                                </li>
                                <li className="social-item">
                                    <div id="js-instabtn" className="social-btn" title="Поделиться ссылкой во ВКонтакте"
                                         data-url="" data-label="Вконтакте"
                                         data-image=""
                                         data-media=""
                                         data-title="">
                                        <span className="iconb icon-instagram" />
                                    </div>
                                </li>
                                <li className="social-item">
                                    <div id="js-fbbtn" className="social-btn" title="Поделиться ссылкой во ВКонтакте"
                                         data-url="" data-label="Вконтакте"
                                         data-image=""
                                         data-media=""
                                         data-title="">
                                        <span className="iconb icon-facebook-f" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="claim-widget">
                        <div className="profile-claim">
                            <span id="claim" className="claim-text">Сообщить модератору</span>
                            <div id="modbox" className="modalbox">
                                <div className="modal-window">
                                    <div className="modal-head">
                                        <h2 className="modal-title">Сообщение модератору</h2>
                                        <button id="modclose" className="modal-close" />
                                    </div>
                                    <div className="modal-content">
                                        <div className="modal-content-text">Сообщите модераторам, если считаете, что
                                            здесь нарушены&nbsp;<NavLink to="#s" className="rules-link">Правила Jobify</NavLink></div>
                                        <div className="modal-form-item">
                                            <select id="Sclaim" className="modfield claim-select"
                                                    data-event="claimSelect">
                                                <option value="0">Укажите причину...</option>
                                                <option value="1">Ссылки на сторонние сайты</option>
                                                <option value="2">Контактные данные</option>
                                                <option value="3">Обсуждение конфликтов</option>
                                                <option value="4">Спам / реклама</option>
                                                <option value="5">Другая причина</option>
                                            </select>
                                        </div>
                                        <div className="modal-form-item">
                                            <textarea id="Tclaim" className="modfield claim-text" rows="4" placeholder="Добавьте сюда пояснения — это ускорит проверку. Если у Вас есть дополнительная информация о нарушении (ссылки, иные данные), укажите ее здесь." />
                                        </div>
                                        <div className="modal-form-item">
                                            <input id="Eclaim" className="modfield claim-email" maxLength="35" type="email" placeholder="Укажите email" />
                                        </div>
                                    </div>
                                    <div className="modal-foot">
                                        <button className="modal-btn" type="button" disabled="disabled">Отправить
                                        </button>
                                    </div>
                                </div>
                                <div className="modal-mask" />
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar