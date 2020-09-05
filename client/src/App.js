import React from 'react';
import {Route, useHistory} from 'react-router-dom';
import NavContainer from './chunks/layout/Nav/NavContainer';
import Preloader from "./chunks/common/Preloader/Preloader";
import './App.css';
import Landing from './chunks/layout/Landing';
import RegisterContainer from './chunks/auth/RegisterContainer';
import LoginContainer from './chunks/auth/LoginContainer';
import AllPostsContainer from "./chunks/Posts/AllPostsContainer";
import DashboardContainer from './chunks/Dasboard/DashboardContainer';
import UpdateProfileContainer from "./chunks/Profile/UpdateProfile/UpdateProfileContainer";
import ExperienceContainer from "./chunks/Profile/Experience/ExperienceContainer";
import EducationContainer from "./chunks/Profile/Education/EducationContainer";
import AllProfilesContainer from "./chunks/Profile/AllProfiles/AllProfilesContainer";
import ProfileRouter from "./chunks/Profile/ProfileContainer";
import Footer from "./chunks/layout/Footer/Footer";

const App = (props) => {
  const history = useHistory();
  return (
    <div className="main">
      <NavContainer />
      <Preloader isFetching={props.isFetching} />
      <Route exact path='/' render={() => <Landing />} />
      <Route exact path='/profile/:id' render={() => <ProfileRouter />} />
      <Route exact path='/register' render={() => <RegisterContainer />} />
      <Route exact path='/login' render={() => <LoginContainer />} />
      <Route exact path='/posts' render={() => <AllPostsContainer />} />
      <Route exact path='/profiles' render={() => <AllProfilesContainer />} />
      <Route exact path='/dashboard' render={() => <DashboardContainer history={history} />} />
      <Route exact path='/update-profile' render={() => <UpdateProfileContainer history={history} />} />
      <Route exact path='/add-experience' render={() => <ExperienceContainer history={history} />} />
      <Route exact path='/add-education' render={() => <EducationContainer history={history} />} />
      <Footer />
    </div>
  );
};

export default App;
