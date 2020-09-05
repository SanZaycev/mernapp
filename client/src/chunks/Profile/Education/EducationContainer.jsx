import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import * as axios from 'axios';
import { getEducationAC, changeEducationFieldAC, educationErrorAC, clearDashboardEducationAC } from '../../../redux/education-reducer';
import { setAlertAC, removeAlertAC } from '../../../redux/alert-reducer';
import {boxLoadingAC, isFetchingAC} from '../../../redux/auth-reducer';
import Education from './Education';
import Sidebar from '../../Sidebar/Sidebrar';
import Alert from '../../common/Alert/Alert';
import PrimaryNav from "../../layout/PrimaryNav/PrimaryNav";

class EducationContainer extends React.Component{
    componentDidMount(){
        this.props.boxLoadingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.boxLoadingAC(false),350);
        setTimeout(()=>this.props.isFetchingAC(false),350);
    }
    educationSubmit = async e => {
        e.preventDefault();
        this.props.isFetchingAC(true);
        setTimeout(()=>this.props.isFetchingAC(false),300);
        let school = this.props.education.school;
        let degree = this.props.education.degree;
        let fieldofstudy = this.props.education.fieldofstudy;
        let from = this.props.education.from;
        let to = this.props.education.to;
        let current = this.props.education.current;
        let description = this.props.education.description;
        const education = { school, degree, fieldofstudy, from, to, current, description };
        let data = JSON.stringify(education);
        let config = { headers: { 'Content-Type':'application/json' }};
        try{
            const response = await axios.put('/api/profile/education', data, config);
            this.props.setAlertAC('Образование успешно добавлено', 'success', 5000);
            let newEdu = response.data.education[0];
            this.props.getEducationAC(newEdu.school, newEdu.degree, newEdu.fieldofstudy, newEdu.from, newEdu.to, newEdu.current, newEdu.description);
            this.props.clearDashboardEducationAC();
            this.props.history.push('/dashboard');
        } catch (err){
            const errors = err.response && err.response.data.errors ? err.response.data.errors : null;
            if(errors){ errors.forEach(error => this.props.setAlertAC(error.msg, 'danger', 5000)); }
            console.log(err);
            return err.response && err.response.statusText && err.response.status ? this.props.educationErrorAC(err.response.statusText, err.response.status) : console.log(err);
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
                            <Education { ...this.props.education } boxLoad={this.props.boxLoad} changeEducationFieldAC={this.props.changeEducationFieldAC} educationSubmit={this.educationSubmit} />
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
        education: state.education,
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

export default connect(mapStateToProps, { getEducationAC, changeEducationFieldAC, educationErrorAC, clearDashboardEducationAC, isFetchingAC, boxLoadingAC, setAlertAC, removeAlertAC })(EducationContainer);