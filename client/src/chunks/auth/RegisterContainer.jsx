import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { getUserAC, authFailAC, changeFieldAC, isFetchingAC, successRegisterAC, failRegisterAC } from '../../redux/auth-reducer';
import { setAlertAC, removeAlertAC } from '../../redux/alert-reducer';
import Register from './Register';
import Alert from '../common/Alert/Alert';
import * as axios from 'axios';
import setAuthToken from "../../utils/setAuthToken";

class RegisterContainer extends React.Component{
    componentDidMount() {
        this.props.isFetchingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.isFetchingAC(false),300);
    }
    onRegister = async e => {
        e.preventDefault();
        this.props.isFetchingAC(true);
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),100);
        setTimeout(()=>this.props.isFetchingAC(false),300);
        if(this.props.password !== this.props.password2){
            this.props.setAlertAC('Пароли не совпадают', 'danger', 5000);
        }
        else{
            let name = this.props.name;
            let email = this.props.email;
            let password = this.props.password;
            const newUser = { name, email, password };
            let config = { headers: { 'Content-Type':'application/json' }};
            let data = JSON.stringify(newUser);
            try{
                let response = await axios.post('/api/users', data, config);
                this.props.alert.isAlert = false;
                this.props.successRegisterAC(response.data.token);
                this.getUser();
            } catch (err){
                const errors = err.response.data.errors;
                if(errors){
                    errors.forEach(error => this.props.setAlertAC(error.msg, 'danger', 5000));
                }
                this.props.failRegisterAC();
            }
        }
    };
    getUser = async function(){
        if(localStorage.token){ setAuthToken(localStorage.token); }
        try{
            const response = await axios.get('/api/auth');
            this.props.getUserAC(response.data);
        } catch (err){
            this.props.authFailAC();
        }
    };
    render(){
        if(this.props.isAuth){ return <Redirect to='/dashboard' /> }
        return(
            <section className="container">
                <Alert { ...this.props.alert } setAlert={this.props.setAlertAC} removeAlert={this.props.removeAlertAC} />
                <Register { ...this.props } onRegister={this.onRegister} />
            </section>
        );
    }
}

let mapStateToProps = (state) => {
    return{
        name: state.auth.name,
        email: state.auth.email,
        password: state.auth.password,
        password2: state.auth.password2,
        isAuth: state.auth.isAuth,
        alert: state.alert
    }
};

export default connect(mapStateToProps, { getUserAC, authFailAC, changeFieldAC, isFetchingAC, successRegisterAC, failRegisterAC, setAlertAC, removeAlertAC })(RegisterContainer);