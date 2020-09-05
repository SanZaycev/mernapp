import React from 'react';
import {connect} from 'react-redux';
import { logoutAC } from '../../../redux/auth-reducer';
import { clearProfileAC } from '../../../redux/profile-reducer';
import { clearExperienceAC } from '../../../redux/experience-reducer';
import { clearEducationAC } from '../../../redux/education-reducer';
import NavIn from './NavIn';
import NavOut from './NavOut';

const NavContainer = (props) => {
    if(props.isAuth){ return <NavIn {...props} /> }
    else{ return <NavOut {...props} /> }
};

const mapStateToProps = (state) => {
    return{
        isAuth: state.auth.isAuth,
        user: state.auth.authUser
    }
}

export default connect(mapStateToProps, { logoutAC, clearProfileAC, clearExperienceAC, clearEducationAC })(NavContainer);