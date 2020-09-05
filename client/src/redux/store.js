import {applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth-reducer';
import alertReducer from './alert-reducer';
import profileReducer from './profile-reducer';
import experienceReducer from "./experience-reducer";
import educationReducer from "./education-reducer";
import postsReducer from "./posts-reducer";

const middleware = [thunk];

const reducers = combineReducers({
    auth: authReducer,
    alert: alertReducer,
    profile: profileReducer,
    experience: experienceReducer,
    education: educationReducer,
    posts: postsReducer
});

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
);

window.state = store;
export default store;