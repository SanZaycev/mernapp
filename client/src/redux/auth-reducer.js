import { GET_USER, REGISTER_SUCCESS, REGISTER_FAIL, CHANGE_REGISTER_FIELD, IS_FETCHING, BOX_LOADING, AUTH_SUCCESS, AUTH_FAIL, LOGOUT, ACCOUNT_DELETED } from "./constants";

const initialState = {
    token: localStorage.getItem('token'),
    authUser: {},
    name: '',
    email: '',
    password: '',
    password2: '',
    isFetching: true,
    boxLoading: false,
    isAuth: false
};

const authReducer = (state= initialState, action) => {
    switch (action.type){
        case LOGOUT:
            localStorage.removeItem('token');
            return { ...state, token: null, authUser: null, isAuth: false};
        case GET_USER:
            return{ ...state, authUser: action.userData, isAuth: true };
        case AUTH_SUCCESS:
            localStorage.setItem('token', action.token);
            return{ ...state, token: action.token, isAuth: true, password: "", password2: "" };
        case AUTH_FAIL:
            localStorage.removeItem('token');
            return{ ...state, token: null, authUser: null, isAuth: false};
        case REGISTER_SUCCESS:
            localStorage.setItem('token', action.token);
            return{ ...state, token: action.token, isAuth: true, password: "", password2: "" };
        case REGISTER_FAIL:
            localStorage.removeItem('token');
            return{ ...state, token: null, authUser: null, isAuth: false};
        case CHANGE_REGISTER_FIELD:
            return{ ...state, [action.eventName]: action.eventValue };
        case ACCOUNT_DELETED:
            localStorage.removeItem('token');
            return { ...state, token: null, authUser: null, isAuth: false};
        case IS_FETCHING:
            return{ ...state, isFetching: action.isLoading };
        case BOX_LOADING:
            return{ ...state, boxLoading: action.isLoading };
        default:
            return{...state};
    }
};

export const accountDeletedAC = () => ({ type: ACCOUNT_DELETED });
export const getUserAC = (userData) => ({ type: GET_USER, userData });
export const logoutAC = () => ({ type: LOGOUT });
export const authSuccessAC = (token) => ({ type: AUTH_SUCCESS, token});
export const authFailAC = () => ({ type: AUTH_FAIL });
export const successRegisterAC = (token) => ({ type: REGISTER_SUCCESS, token });
export const failRegisterAC = () => ({ type: REGISTER_FAIL });
export const changeFieldAC = (eventName, eventValue) => ({type: CHANGE_REGISTER_FIELD, eventName, eventValue});
export const isFetchingAC = (isLoading) => ({type: IS_FETCHING, isLoading});
export const boxLoadingAC = (isLoading) => ({type: BOX_LOADING, isLoading});
export default authReducer;