import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { getUserAC, changeFieldAC, isFetchingAC, authSuccessAC, authFailAC } from '../../redux/auth-reducer';
import { setAlertAC, removeAlertAC } from '../../redux/alert-reducer';
import { getProfileAC, profileErrorAC } from '../../redux/profile-reducer';
import { setExperiencesAC } from '../../redux/experience-reducer';
import { setEducationsAC } from '../../redux/education-reducer';
import * as axios from 'axios';
import Alert from '../common/Alert/Alert';
import Login from "./Login";
import setAuthToken from "../../utils/setAuthToken";

class LoginContainer extends React.Component{
    componentDidMount(){
        this.props.isFetchingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.isFetchingAC(false),300);
    }
    onLogin = async e => {
        e.preventDefault();
        this.props.isFetchingAC(true);
        setTimeout(()=>this.props.isFetchingAC(false),300);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        let email = this.props.email;
        let password = this.props.password;
        const loginUser = { email, password };
        let config = { headers: { 'Content-Type':'application/json' }};
        let data = JSON.stringify(loginUser);
        try{
            let response = await axios.post('/api/auth', data, config);
            this.props.alert.isAlert = false;
            this.props.authSuccessAC(response.data.token);
            this.getUser();
            setTimeout(()=>this.getProfile(),100);
        } catch (err){
            if(err.response && err.response.data && err.response.data.errors){
                err.response.data.errors.forEach(error => this.props.setAlertAC(error.msg, 'danger', 5000));
            } else{ console.log(err); }
            this.props.authFailAC();
        }
    };
    getUser = async function(){
        if(localStorage.token){ setAuthToken(localStorage.token); }
        try{
            const response = await axios.get('/api/auth');
            //debugger;
            this.props.getUserAC(response.data);
        } catch (err){
            //debugger;
            this.props.authFailAC();
        }
    };
    getProfile = async function(){
        try{
            const response = await axios.get('/api/profile/iam');
            this.props.getProfileAC(response.data);
            if(response.data.experience){ this.props.setExperiencesAC(response.data.experience); }
            if(response.data.education){ this.props.setEducationsAC(response.data.education); }
        } catch(err){
            return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    render(){
        if(this.props.isAuth){ return <Redirect to='/dashboard' /> }
        return(
            <section className="container">
                <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                <Login { ...this.props } onLogin={this.onLogin} />
            </section>
        );
    }
}

const mapStateToProps = (state) => {
    return{
        email: state.auth.email,
        password: state.auth.password,
        isAuth: state.auth.isAuth,
        alert: state.alert
    }
};

export default connect(mapStateToProps, { getUserAC, getProfileAC, profileErrorAC, setExperiencesAC, setEducationsAC, changeFieldAC, setAlertAC, removeAlertAC, isFetchingAC, authSuccessAC, authFailAC })(LoginContainer);