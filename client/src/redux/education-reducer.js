import { SET_EDUCATIONS, GET_EDUCATION, EDUCATION_ERROR, CLEAR_EDUCATION, CLEAR_DASHBOARD_EDUCATION, CHANGE_EDUCATION_FIELD, DELETE_EDUCATION } from "./constants";

const initialState = {
    educations: [],
    school: "",
    degree: "",
    fieldofstudy: "",
    from: "",
    to: "",
    current: false,
    description: "",
    error: null
};

const educationReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_EDUCATIONS:
            return { ...state, educations: action.educations };
        case GET_EDUCATION:
            let school = action.school ? action.school : "";
            let degree = action.degree ? action.degree : "";
            let fieldofstudy = action.fieldofstudy ? action.fieldofstudy : "";
            let from = action.from ? action.from : "";
            let to = action.to ? action.to : "";
            let current = action.current ? action.current : false;
            let description = action.description ? action.description : "";
            const newEdu = { school: school, degree: degree, fieldofstudy: fieldofstudy, from: from, to: to, current: current, description: description };
            return { ...state, educations: [...state.educations, newEdu] };
        case CHANGE_EDUCATION_FIELD:
            if(action.eventName === 'current'){ return { ...state, current: !state.current }}
            return{ ...state, [action.eventName]: action.eventValue };
        case EDUCATION_ERROR:
            let newError = { msg: action.msg, status: action.errStatus };
            return { ...state, error: newError };
        case CLEAR_EDUCATION:
            return { ...state, educations: [], school: "", degree: "", fieldofstudy: "", from: "", to: "", current: false, description: "" };
        case CLEAR_DASHBOARD_EDUCATION:
            return { ...state, school: "", degree: "", fieldofstudy: "", from: "", to: "", current: false, description: "" };
        case DELETE_EDUCATION:
            const educations = state.educations;
            const removeIndex = educations.map(item => item.id).indexOf(action.id);
            educations.splice(removeIndex,1);
            return { ...state, educations: educations };
        default:
            return { ...state };
    }
};

export const deleteEducationAC = (id) => ({ type: DELETE_EDUCATION, id });
export const setEducationsAC = (educations) => ({ type: SET_EDUCATIONS, educations });
export const getEducationAC = (school, degree, fieldofstudy, from, to, current, description) => ({ type: GET_EDUCATION, school, degree, fieldofstudy, from, to, current, description });
export const changeEducationFieldAC = (eventName, eventValue) => ({type: CHANGE_EDUCATION_FIELD, eventName, eventValue});
export const educationErrorAC = (msg, errStatus) => ({ type: EDUCATION_ERROR, msg, errStatus });
export const clearEducationAC = () => ({ type: CLEAR_EDUCATION });
export const clearDashboardEducationAC = () => ({ type: CLEAR_DASHBOARD_EDUCATION });
export default educationReducer;