import { SET_EXPERIENCES, GET_EXPERIENCE, EXPERIENCE_ERROR, CLEAR_EXPERIENCE, CLEAR_DASHBOARD_EXPERIENCE, CHANGE_EXPERIENCE_FIELD, DELETE_EXPERIENCE } from "./constants";

const initialState = {
    experiences: [],
    title: "",
    company: "",
    location: "",
    from: "",
    to: "",
    current: false,
    description: "",
    error: null
};

const experienceReducer = (state= initialState, action) => {
    switch (action.type){
        case SET_EXPERIENCES:
            return { ...state, experiences: action.experiences };
        case GET_EXPERIENCE:
            let title = action.title ? action.title : "";
            let company = action.company ? action.company : "";
            let location = action.location ? action.location : "";
            let from = action.from ? action.from : "";
            let to = action.to ? action.to : "";
            let current = action.current ? action.current : false;
            let description = action.description ? action.description : "";
            const newExp = { title: title, company: company, location: location, from: from, to: to, current: current, description: description };
            return { ...state, experiences: [...state.experiences, newExp] };
        case CHANGE_EXPERIENCE_FIELD:
            if(action.eventName === 'current'){ return { ...state, current: !state.current }}
            return{ ...state, [action.eventName]: action.eventValue };
        case EXPERIENCE_ERROR:
            let newError = { msg: action.msg, status: action.errStatus };
            return { ...state, error: newError };
        case CLEAR_EXPERIENCE:
            return { ...state, experiences: [], title: "", company: "", location: "", from: "", to: "", current: false, description: "" };
        case CLEAR_DASHBOARD_EXPERIENCE:
            return { ...state, title: "", company: "", location: "", from: "", to: "", current: false, description: "" };
        case DELETE_EXPERIENCE:
            const experiences = state.experiences;
            const removeIndex = experiences.map(item => item.id).indexOf(action.id);
            experiences.splice(removeIndex,1);
            return { ...state, experiences: experiences };
        default:
            return { ...state };
    }
};

export const deleteExperienceAC = (id) => ({ type: DELETE_EXPERIENCE, id });
export const setExperiencesAC = (experiences) => ({ type: SET_EXPERIENCES, experiences });
export const getExperienceAC = (title, company, location, from, to, current, description) => ({ type: GET_EXPERIENCE, title, company, location, from, to, current, description });
export const changeExperienceFieldAC = (eventName, eventValue) => ({type: CHANGE_EXPERIENCE_FIELD, eventName, eventValue});
export const experienceErrorAC = (msg, errStatus) => ({ type: EXPERIENCE_ERROR, msg, errStatus });
export const clearExperienceAC = () => ({ type: CLEAR_EXPERIENCE });
export const clearDashboardExperienceAC = () => ({ type: CLEAR_DASHBOARD_EXPERIENCE });
export default experienceReducer;