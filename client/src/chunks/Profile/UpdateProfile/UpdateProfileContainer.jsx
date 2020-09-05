import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as axios from 'axios';
import {accountDeletedAC, isFetchingAC, boxLoadingAC} from '../../../redux/auth-reducer';
import {removeAlertAC, setAlertAC} from '../../../redux/alert-reducer';
import {changeProfileFieldAC, clearProfileAC, getProfileAC, profileErrorAC} from '../../../redux/profile-reducer';
import {clearExperienceAC} from '../../../redux/experience-reducer';
import {clearEducationAC} from '../../../redux/education-reducer';
import PrimaryNav from '../../layout/PrimaryNav/PrimaryNav';
import UpdateForm from './UpdateProfile';
import Alert from '../../common/Alert/Alert';
import Sidebar from '../../Sidebar/Sidebrar';

class UpdateProfileContainer extends React.Component{
    componentDidMount(){
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.boxLoadingAC(false),350);
        setTimeout(()=>this.props.isFetchingAC(false),350);
    }
    updateSubmit = async e => {
        e.preventDefault();
        this.props.boxLoadingAC(true);
        setTimeout(()=>this.props.boxLoadingAC(false),300);
        let company = this.props.profile.company;
        let website = this.props.profile.website;
        let location = this.props.profile.location;
        let status = this.props.profile.status;
        let profession = this.props.profile.profession;
        let skills = this.props.profile.skills;
        let bio = this.props.profile.bio;
        let banner = this.props.profile.banner;
        let githubname = this.props.profile.githubname;
        let telegram = this.props.social.telegram;
        let vk = this.props.social.vk;
        let linkedin = this.props.social.linkedin;
        let twitter = this.props.social.twitter;
        let instagram = this.props.social.instagram;
        let facebook = this.props.social.facebook;
        let youtube = this.props.social.youtube;
        const profile = { company, website, location, status, profession, skills, bio, banner, githubname, telegram, vk, linkedin, twitter, instagram, facebook, youtube };
        let data = JSON.stringify(profile);
        let config = { headers: { 'Content-Type':'application/json' }};
        try{
            const response = await axios.post('api/profile', data, config);
            this.props.setAlertAC('Профиль успешно изменён', 'success', 5000);
            this.props.getProfileAC(response.data);
            this.props.history.push('/dashboard');
        } catch (err){
            const errors = err.response && err.response.data.errors ? err.response.data.errors : null;
            if(errors){
                errors.forEach(error => this.props.setAlertAC(error.msg, 'danger', 5000));
            }
            return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    deleteAccount = async id => {
        if(window.confirm('Вы уверены, что хотите удалить свой аккаунт? Это действие невозможно отменить.')){
            try {
                await axios.delete(`/api/profile/:${id}`);
                setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),150);
                this.props.setAlertAC('Ваш аккаунт успешно удалён', 'warning', 5000);
                this.props.accountDeletedAC();
                this.props.clearProfileAC();
                this.props.clearExperienceAC();
                this.props.clearEducationAC();
                this.props.history.push('/register');
            } catch (err){
                return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : null;
            }
        }
    };
    render(){
        if(!this.props.token){ return <Redirect to="/login" /> }
        else{
            return(
                <Fragment>
                <PrimaryNav isProfile={true} />
                <section className="container">
                    <div className="row">
                        <Sidebar { ...this.props.user }  { ...this.props.social } profession={this.props.profession} setAlert={this.props.setAlertAC} />
                        <div className="col-sm-12 col-md-7 col-lg-9">
                            <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                            <UpdateForm { ...this.props.profile } { ...this.props.social } { ...this.props.user } boxLoad={this.props.boxLoad} changeProfileFieldAC={this.props.changeProfileFieldAC} updateSubmit={this.updateSubmit} deleteAccount={this.deleteAccount} />
                        </div>
                    </div>
                </section>
                </Fragment>
            );
        }
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
        boxLoad: state.auth.boxLoading,
        alert: state.alert
    }
};

export default connect(mapStateToProps, { accountDeletedAC, clearProfileAC, clearExperienceAC, clearEducationAC, changeProfileFieldAC, setAlertAC, removeAlertAC, isFetchingAC, boxLoadingAC, getProfileAC, profileErrorAC } )(UpdateProfileContainer);