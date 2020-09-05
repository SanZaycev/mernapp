import React, {Fragment} from 'react';
import {connect} from 'react-redux';
import PrimaryNav from '../../layout/PrimaryNav/PrimaryNav';
import AllProfiles from './AllProfiles';
import {isFetchingAC} from '../../../redux/auth-reducer';
import { getAllProfilesAC, profileErrorAC } from '../../../redux/profile-reducer';
import * as axios from 'axios';

class AllProfilesContainer extends React.Component{
    componentDidMount(){
        this.props.isFetchingAC(true);
        this.getProfiles();
        setTimeout(()=>window.scrollTo({ top: 0, behavior: "smooth"}),50);
        setTimeout(()=>this.props.isFetchingAC(false),250);
    }
    getProfiles = async function(){
        try {
            const response = await axios.get('/api/profile');
            this.props.getAllProfilesAC(response.data);
        } catch (err){
            err.response && err.response.statusText && err.response.status ? this.props.profileErrorAC(err.response.statusText, err.response.status) : console.log(err);
        }
    };
    render() {
        return(
            <Fragment>
            <PrimaryNav />
            <section className="container">
                <AllProfiles profiles={this.props.profiles} />
            </section>
            </Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profiles: state.profile.profiles
    }
};
export default connect(mapStateToProps, { getAllProfilesAC, profileErrorAC, isFetchingAC })(AllProfilesContainer);