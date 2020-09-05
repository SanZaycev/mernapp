import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCurrentProfileAC, getReposAC, profileErrorAC} from '../../redux/profile-reducer';
import {boxLoadingAC, isFetchingAC} from '../../redux/auth-reducer';
import * as axios from 'axios';
import PrimaryNav from '../layout/PrimaryNav/PrimaryNav';
import Sidebar from "../Sidebar/Sidebrar";
import Profile from './Profile';
import Alert from "../common/Alert/Alert";

class ProfileContainer extends React.Component{
    componentDidMount(){
        this.getCurrProfile(this.props.match.params.id);
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),50);
        setTimeout(()=>this.props.boxLoadingAC(false),500);
        setTimeout(()=>this.props.isFetchingAC(false),600);
        //this.getRepos();
    }
    getCurrProfile = id => {
        axios.get(`/api/profile/user/${id}`)
            .then(response => { this.props.getCurrentProfileAC(response.data); })
            .catch(err =>{ err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err); });
    };
    /*getRepos = async username => {
        try {
            const response = await axios.get(`api/profile/github/${username}`);
            this.props.getReposAC(response.data);
        } catch (err){
            err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };*/
    render(){
        return(
            <Fragment>
            <PrimaryNav isUsers={true} />
            <section className="container">
                <div className="row">
                    <Sidebar { ...this.props.currUser } { ...this.props.currProfile } setAlert={this.props.setAlertAC} />
                    <div className="col-sm-12 col-md-7 col-lg-9">
                        <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                        <Profile { ...this.props.currProfile } { ...this.props.currUser } experience={this.props.currExperience} education={this.props.currEducation } authUser={this.props.authUser} isAuth={this.props.isAuth} boxLoad={this.props.boxLoad} />
                    </div>
                </div>
            </section>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        currProfile: state.profile.currProfile,
        currUser: state.profile.currUser,
        currExperience: state.profile.currExperience,
        currEducation: state.profile.currEducation,
        authUser: state.auth.authUser,
        isAuth: state.auth.isAuth,
        boxLoad: state.auth.boxLoading,
        alert: state.alert
    }
};
const ProfileRouter = withRouter(ProfileContainer);
export default connect(mapStateToProps, { getCurrentProfileAC, getReposAC, profileErrorAC, isFetchingAC, boxLoadingAC })(ProfileRouter);