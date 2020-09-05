import React from 'react';
import './UpdateProfile.css';
import {NavLink} from 'react-router-dom';
import Inloader from '../../common/Inloader/Inloader';

const UpdateProfile = (props) => {
    let onSubmit = e => { props.updateSubmit(e); };
    let onChangeField = e => { props.changeProfileFieldAC(e.target.name, e.target.value); };
    return(
      <div className="dashboard-profile">
          <div className="dashboard">
              <div className="lead-box"><NavLink className="back-btn" to="/dashboard"><span className="icon icon-chevron-left" /><span className="back-text">Назад</span></NavLink></div>
              <div className="dash-links">
                  <NavLink to="/update-profile" className="col-md-4 col-sm-12 dash-tab active"><span className="icon icon-id-card-alt" /><span className="dash-text">Редактировать профиль</span></NavLink>
                  <NavLink to="/add-experience" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-briefcase"  /><span className="dash-text">Добавить опыт</span></NavLink>
                  <NavLink to="/add-education" className="col-md-4 col-sm-12 dash-tab"><span className="icon icon-graduation-cap" /><span className="dash-text">Добавить образование</span></NavLink>
              </div>
              <small>* обязательное поле</small>
              <form className="form update-profile-form" onSubmit={e => onSubmit(e)} >
                  <Inloader boxLoad={props.boxLoad} />
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text" name="status" maxLength="30" placeholder="Статус"  value={props.status} />
                      <small className="form-text">Ваш рабочий статус (Например: Принимаю заказы)</small>
                  </div>
                  <div className="form-group">
                      <select onChange={e => onChangeField(e)} name="profession" value={props.profession} >
                          <option value="0">* Выбирите специализацию</option>
                          <option value="Дизайнер">Дизайнер</option>
                          <option value="Сео специалист">Сео специалист</option>
                          <option value="Front-end разработчик">Front-end разработчик</option>
                          <option value="Back-end разработчик">Back-end разработчик</option>
                          <option value="Full stack разработчик">Full stack разработчик</option>
                          <option value="Верстальщик">Верстальщик</option>
                          <option value="Junior разрабочик">Junior разрабочик</option>
                          <option value="Middle разрабочик">Middle разрабочик</option>
                          <option value="Senior разрабочик">Senior разрабочик</option>
                          <option value="Manager">Менеджер</option>
                          <option value="Студент">Студент</option>
                          <option value="Инструктор">Инструктор или учитель</option>
                          <option value="Интерн">Интерн</option>
                          <option value="Другое">Другое</option>
                      </select>
                      <small className="form-text">Дайте другим представление о том, где вы находитесь в своей карьере</small>
                  </div>
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text" name="company" maxLength="30" placeholder="Компания" value={props.company} />
                      <small className="form-text">Название компании</small>
                  </div>
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text" name="website" maxLength="50" placeholder="Сайт" value={props.website} />
                      <small className="form-text">Вебсайт компании</small>
                  </div>
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text" name="location" maxLength="50" placeholder="Адрес" value={props.location} />
                      <small className="form-text">Где вы находитесь? Страна и город (Например: Россия, Севастополь)</small>
                  </div>
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text"  name="skills" maxLength="100" placeholder="* Навыки" value={props.skills} />
                      <small className="form-text">Введите навыки через запятую (Например: HTML,CSS,JavaScript,PHP)</small>
                  </div>
                  <div className="form-group">
                      <input onChange={e => onChangeField(e)} type="text" name="githubname" maxLength="100" placeholder="Имя пользователя Github" value={props.githubname} />
                      <small className="form-text">Если хотите включить репозитории, введите своё имя с Github</small>
                  </div>
                  <div className="form-group">
                      <textarea onChange={e => onChangeField(e)} name="bio" maxLength="300" placeholder="Короткое био о себе" value={props.bio} />
                      <small className="form-text">Расскажите немного о себе</small>
                  </div>

                  <div className="my-2">
                      <button type="button" className="btn btn-light">Добавить ссылки социальных сетей</button>
                      <span>Опционально</span>
                  </div>

                  <div className="form-group social-input">
                      <span className="iconb icon-telegram" />
                      <input onChange={e => onChangeField(e)} type="text" name="telegram" maxLength="50" placeholder="Telegram URL" value={props.telegram} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-vk" />
                      <input onChange={e => onChangeField(e)} type="text" name="vk" maxLength="50" placeholder="VK URL" value={props.vk} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-linkedin" />
                      <input onChange={e => onChangeField(e)} type="text" name="linkedin" maxLength="50" placeholder="Linkedin URL" value={props.linkedin} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-twitter" />
                      <input onChange={e => onChangeField(e)} type="text" name="twitter" maxLength="50" placeholder="Twitter URL" value={props.twitter} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-instagram" />
                      <input onChange={e => onChangeField(e)} type="text" name="instagram" maxLength="50" placeholder="Instagram URL" value={props.instagram} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-facebook" />
                      <input onChange={e => onChangeField(e)} type="text" name="facebook" maxLength="50" placeholder="Facebook URL" value={props.facebook} />
                  </div>
                  <div className="form-group social-input">
                      <span className="iconb icon-youtube" />
                      <input onChange={e => onChangeField(e)} type="text" name="youtube" maxLength="50" placeholder="YouTube URL" value={props.youtube} />
                  </div>

                  <NavLink className="btn btn-light my-1" to="dashboard">Назад</NavLink>
                  <button type="submit" className="btn btn-primary my-1">Создать профиль</button>
                  <div className="delete-account"><button type="button" onClick={() => props.deleteAccount(props._id)} className="btn btn-white">Удалить аккаунт</button></div>
              </form>
          </div>
      </div>
    );
};

export default UpdateProfile;