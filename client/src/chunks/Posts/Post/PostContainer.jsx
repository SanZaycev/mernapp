import React from 'react';
import Post from './Post';
import {connect} from 'react-redux';
import {postsErrorAC} from '../../../redux/posts-reducer';
import {boxLoadingAC, isFetchingAC} from '../../../redux/auth-reducer';

class PostContainer extends React.Component{
    componentDidMount(){
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.boxLoadingAC(false),350);
        setTimeout(()=>this.props.isFetchingAC(false),350);
    }
    render(){
        return <Post { ...this.props.post } />
    }
}
const mapStateToProps = (state) => {
    return{
        post: state.posts.post
    }
};
export default connect(mapStateToProps, {postsErrorAC, boxLoadingAC, isFetchingAC})(PostContainer)