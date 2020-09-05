import React, {Fragment} from 'react';
import AllPosts from './AllPosts';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {getPostsAC, postsErrorAC, postsLoadingAC, updateLikesAC} from '../../redux/posts-reducer';
import {isFetchingAC} from '../../redux/auth-reducer';
import PrimaryNav from '../layout/PrimaryNav/PrimaryNav';

class ALLPostsContainer extends React.Component{
    componentDidMount(){
        this.props.postsLoadingAC(true);
        this.getPosts();
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.postsLoadingAC(false),350);
        setTimeout(()=>this.props.isFetchingAC(false),350);
    }
    getPosts = async function(){
        try{
            const response = await axios.get('/api/posts');
            this.props.getPostsAC(response.data);
        } catch (err){
            return err.response && err.response.statusText && err.response.status ? this.props.postsErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    addLike = async pid => {
        try{
            const response = await axios.get(`/api/posts/like/${pid}`);
            this.props.updateLikesAC(pid, response.data);
        } catch (err){
            return err.response && err.response.statusText && err.response.status ? this.props.postsErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    render(){
        return(
            <Fragment>
            <PrimaryNav />
            <section className="container">
                <AllPosts posts={this.props.posts} addLike={this.props.addLike} isAuth={this.props.isAuth} authUser={this.props.authUser} isLoading={this.props.isLoading} />
            </section>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return{
        authUser: state.auth.authUser,
        isAuth: state.auth.isAuth,
        posts: state.posts.allPosts,
        isLoading: state.posts.isLoading,
    }
};
export default connect(mapStateToProps, {getPostsAC, postsErrorAC, postsLoadingAC, updateLikesAC, isFetchingAC})(ALLPostsContainer)