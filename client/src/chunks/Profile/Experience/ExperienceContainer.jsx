import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from "react-router-dom";
import * as axios from "axios";
import { getExperienceAC, changeExperienceFieldAC, experienceErrorAC, clearDashboardExperienceAC } from '../../../redux/experience-reducer';
import { setAlertAC, removeAlertAC } from '../../../redux/alert-reducer';
import {boxLoadingAC, isFetchingAC} from '../../../redux/auth-reducer';
import PrimaryNav from '../../layout/PrimaryNav/PrimaryNav';
import Experience from './Experience';
import Sidebar from '../../Sidebar/Sidebrar';
import Alert from '../../common/Alert/Alert';

class ExperienceContainer extends React.Component{
    componentDidMount(){
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.boxLoadingAC(false),350);
        setTimeout(()=>this.props.isFetchingAC(false),350);
    }
    experienceSubmit = async e => {
        e.preventDefault();
        this.props.isFetchingAC(true);
        setTimeout(()=>this.props.isFetchingAC(false),300);
        let title = this.props.experience.title;
        let company = this.props.experience.company;
        let location = this.props.experience.location;
        let from = this.props.experience.from;
        let to = this.props.experience.to;
        let current = this.props.experience.current;
        let description = this.props.experience.description;
        const experience = { title, company, location, from, to, current, description };
        let data = JSON.stringify(experience);
        let config = { headers: { 'Content-Type':'application/json' }};
        try{
            const response = await axios.put('/api/profile/experience', data, config);
            this.props.setAlertAC('Опыт работы успешно добавлен', 'success', 5000);
            let newExp = response.data.experience[0];
            this.props.getExperienceAC(newExp.title, newExp.company, newExp.location, newExp.from, newExp.to, newExp.current, newExp.description);
            this.props.clearDashboardExperienceAC();
            this.props.history.push('/dashboard');
        } catch (err){
            const errors = err.response && err.response.data.errors ? err.response.data.errors : null;
            if(errors){
                errors.forEach(error => this.props.setAlertAC(error.msg, 'danger', 5000));
            }
            console.log(err);
            return err.response && err.response.statusText && err.response.status ? this.props.experienceErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    render(){
        if(this.props.token){
            return(
                <Fragment>
                <PrimaryNav isProfile={true} />
                <section className="container">
                    <div className="row">
                        <Sidebar { ...this.props.user } { ...this.props.social } profession={this.props.profession} setAlert={this.props.setAlertAC} />
                        <div className="col-sm-12 col-md-7 col-lg-9">
                            <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                            <Experience { ...this.props.experience } boxLoad={this.props.boxLoad} changeExperienceFieldAC={this.props.changeExperienceFieldAC} experienceSubmit={this.experienceSubmit} />
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
        experience: state.experience,
        social: {
            telegram: state.profile.telegram,
            vk: state.profile.vk,
            linkedin: state.profile.linkedin,
            twitter: state.profile.twitter,
            instagram: state.profile.instagram,
            facebook: state.profile.facebook,
            youtube: state.profile.youtube,
        },
        profession: state.profile.profession,
        boxLoad: state.auth.boxLoading,
        alert: state.alert
    };
};

export default connect(mapStateToProps, { getExperienceAC, changeExperienceFieldAC, experienceErrorAC, clearDashboardExperienceAC, isFetchingAC, boxLoadingAC, setAlertAC, removeAlertAC })(ExperienceContainer);