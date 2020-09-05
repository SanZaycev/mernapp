import React from 'react';
import * as axios from "axios";
import { connect } from 'react-redux';
import { authFailAC, getUserAC, isFetchingAC } from "../src/redux/auth-reducer";
import { getProfileAC, profileErrorAC } from "../src/redux/profile-reducer";
import { setExperiencesAC } from "../src/redux/experience-reducer";
import { setEducationsAC } from "../src/redux/education-reducer";
import App from "./App";

class AppContainer extends React.Component{
    componentDidMount(){
        let token = localStorage.token;
        if(token){
            axios.defaults.headers.common['x-auth-token'] = token;
            setTimeout(()=>this.getUser(this.props),50);
            setTimeout(()=>this.getProfile(),150);
        }
        else { delete axios.defaults.headers.common['x-auth-token']; }
    }
    getUser = async function(){
        try{
            const response = await axios.get('/api/auth');
            this.props.getUserAC(response.data);
        } catch (err){
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
            return err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : this.props.profileErrorAC(err, 404);
        }
    };
    render(){
        return <App isFetching={this.props.isFetching} />;
    };
}
const mapStateToProps = (state) => {
    return{ isFetching: state.auth.isFetching }
};
export default connect(mapStateToProps, { authFailAC, getUserAC, isFetchingAC, getProfileAC, profileErrorAC, setExperiencesAC, setEducationsAC })(AppContainer);