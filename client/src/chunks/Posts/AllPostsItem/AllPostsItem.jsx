import React from 'react';
import {NavLink} from 'react-router-dom';
import './AllPostsItem.css';
import Moment from "react-moment";
import emptyAvatar from '../../../assets/images/empty-avatar.png';

const AllPostsItem = (props) => {
    console.log(props.addLike);
    const likeClick = (pid) => { props.addLike(props._id) }
    return(
        <div className="post bg-white p-1 my-1">
            <div>
                <NavLink to="profile.html">
                    <img className="round-img" src={props.avatar ? props.avatar : emptyAvatar} alt="" />
                    {props.name && (<h4>{props.name}</h4>)}
                </NavLink>
            </div>
            <div>
                {props.text && (<p className="my-1">{props.text}</p>)}
                {props.date && (<p className="post-date">Опубликовано <Moment format='YYYY/MM/DD'>{props.date}</Moment></p>)}
                <button onClick={()=>likeClick(props._id)} type="button" className="btn btn-light">
                    <span className="icon icon-thumbs-up" />
                    {props.likes && props.likes.length > 0 && (<span>{props.likes.length}</span>)}
                </button>
                <button type="button" className="btn btn-light">
                    <span className="icon icon-thumbs-down" />
                </button>
                <NavLink to={`/post/${props._id}`} className="btn btn-primary">
                    <span className="discuss-text">Написать комментарий</span>
                    {props.comments && props.comments.length > 0 && (<span className='comment-count'>{props.comments.length}</span>)}
                </NavLink>
                {props.isAuth && props.user === props.authUser._id && (<button type="button" className="btn btn-danger"><span className="icon icon-times" /></button>)}
            </div>
        </div>
    );
};
export default AllPostsItem
