import React from 'react';
import './AllPosts.css';
import Inloader from '../common/Inloader/Inloader';
import AllPostsItem from './AllPostsItem/AllPostsItem';

const AllPosts = (props) => {
    const posts = props.posts.map(p=><AllPostsItem addLike={props.addLike} key={p._id} { ...p} isAuth={props.isAuth} authUser={props.authUser} />);
    return(
        <div className="posts">
            <Inloader boxLoad={props.isLoading} />
            {posts}
        </div>
    );
};
export default AllPosts