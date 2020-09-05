import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as axios from 'axios';
import {isFetchingAC, accountDeletedAC, boxLoadingAC} from '../../redux/auth-reducer';
import { setAlertAC, removeAlertAC } from '../../redux/alert-reducer';
import { deleteExperienceAC, clearExperienceAC } from '../../redux/experience-reducer';
import { deleteEducationAC, clearEducationAC } from '../../redux/education-reducer';
import { profileErrorAC, clearProfileAC } from '../../redux/profile-reducer';
import PrimaryNav from "../layout/PrimaryNav/PrimaryNav";
import Dashboard from './Dashboard';
import Sidebar from '../Sidebar/Sidebrar';
import Alert from '../common/Alert/Alert';

class DashboardContainer extends React.Component{
    componentDidMount(){
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.boxLoadingAC(false),250);
        setTimeout(()=>this.props.isFetchingAC(false),300);
    }
    deleteExperience = async id => {
        try{
            await axios.delete(`/api/profile/experience/${id}`);
            setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),200);
            this.props.deleteExperienceAC(id);
            this.props.setAlertAC('Опыт работы успешно удалён', 'success', 5000);
        } catch (err){
            return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    deleteEducation = async id => {
        try{
            await axios.delete(`/api/profile/education/${id}`);
            setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),200);
            this.props.deleteEducationAC(id);
            this.props.setAlertAC('Опыт обучения успешно удалён', 'success', 5000);
        } catch (err){
            return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    render(){
        if(this.props.token){
            return(
                <Fragment>
                <PrimaryNav />
                <section className="container dashboard-container">
                    <div className="row">
                        <Sidebar { ...this.props.user } { ...this.props.social } profession={this.props.profession} setAlert={this.props.setAlertAC} />
                        <div className="col-sm-12 col-md-7 col-lg-9">
                            <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                            <Dashboard { ...this.props.profile }  { ...this.props.user } experiences={this.props.experiences} educations={this.props.educations} deleteExperience={this.deleteExperience} deleteEducation={this.deleteEducation} boxLoad={this.props.boxLoad} />
                        </div>
                    </div>
                </section>
                </Fragment>
            );
        }
        else{ return <Redirect to="/login" /> }
    }
}

const mapStateToProps = (state) => {
    return{
        token: state.auth.token,
        user: state.auth.authUser,
        social: {
            telegram: state.profile.telegram,
            vk: state.profile.vk,
            linkedin: state.profile.linkedin,
            twitter: state.profile.twitter,
            instagram: state.profile.instagram,
            facebook: state.profile.facebook,
            youtube: state.profile.youtube,
        },
        profile: {
            company: state.profile.company,
            website: state.profile.website,
            location: state.profile.location,
            status: state.profile.status,
            profession: state.profile.profession,
            skills: state.profile.skills,
            bio: state.profile.bio,
            banner: state.profile.banner,
            githubname: state.profile.githubname,
            isProfile: state.profile.isProfile,
        },
        profession: state.profile.profession,
        isProfile: state.profile.isProfile,
        experiences: state.experience.experiences,
        educations: state.education.educations,
        boxLoad: state.auth.boxLoading,
        alert: state.alert
    }
};
export default connect(mapStateToProps, { deleteExperienceAC, deleteEducationAC, profileErrorAC, clearProfileAC, clearEducationAC, clearExperienceAC,  accountDeletedAC, isFetchingAC, boxLoadingAC, setAlertAC, removeAlertAC })(DashboardContainer);