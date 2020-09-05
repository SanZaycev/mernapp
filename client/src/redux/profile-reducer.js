import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, CHANGE_PROFILE_FIELD, GET_ALL_PROFILES, GET_REPOS, GET_CURRENT_PROFILE, IS_PROFILE } from "./constants";

const initialState = {
    currUser: null,
    currProfile: null,
    currExperience: null,
    currEducation: null,
    company: "",
    website: "",
    location: "",
    status: "",
    profession: "",
    skills: "",
    bio: "",
    banner: "",
    githubname: "",
    telegram: "",
    vk: "",
    linkedin: "",
    twitter: "",
    instagram: "",
    facebook: "",
    youtube: "",
    isProfile: false,
    profiles: [],
    repos: [],
    error: null
};

const profileReducer = (state= initialState, action) => {
    switch (action.type){
        case GET_PROFILE:
            return {
                ...state,
                company: action.profile.company ? action.profile.company : "",
                website: action.profile.website ? action.profile.website : "",
                location: action.profile.location ? action.profile.location : "",
                status: action.profile.status ? action.profile.status : "",
                profession: action.profile.profession ? action.profile.profession : "",
                skills: action.profile.skills ? action.profile.skills : "",
                bio: action.profile.bio ? action.profile.bio : "",
                banner: action.profile.banner ? action.profile.banner : null,
                githubname: action.profile.githubname ? action.profile.githubname : "",
                telegram: action.profile.social && action.profile.social.telegram ? action.profile.social.telegram : "",
                vk: action.profile.social && action.profile.social.vk ? action.profile.social.vk : "",
                linkedin: action.profile.social && action.profile.social.linkedin ? action.profile.social.linkedin : "",
                twitter: action.profile.social && action.profile.social.twitter ? action.profile.social.twitter : "",
                instagram: action.profile.social && action.profile.social.instagram ? action.profile.social.instagram : "",
                facebook: action.profile.social && action.profile.social.facebook ? action.profile.social.facebook : "",
                youtube: action.profile.social && action.profile.social.youtube ? action.profile.social.youtube : "",
                isProfile: true
            };
        case GET_CURRENT_PROFILE:
            return {
                ...state,
                currUser: action.data.user,
                currExperience: action.data.experience,
                currEducation: action.data.education,
                currProfile: {
                    company: action.data.company ? action.data.company : null,
                    website: action.data.website ? action.data.website : null,
                    location: action.data.location ? action.data.location : null,
                    status: action.data.status ? action.data.status : null,
                    profession: action.data.profession ? action.data.profession : null,
                    skills: action.data.skills ? action.data.skills : null,
                    bio: action.data.bio ? action.data.bio : null,
                    banner: action.data.banner ? action.data.banner : null,
                    githubname: action.data.githubname ? action.data.githubname : null,
                    telegram: action.data.social && action.data.social.telegram ? action.data.social.telegram : null,
                    vk: action.data.social && action.data.social.vk ? action.data.social.vk : null,
                    linkedin: action.data.social && action.data.social.linkedin ? action.data.social.linkedin : null,
                    twitter: action.data.social && action.data.social.twitter ? action.data.social.twitter : null,
                    instagram: action.data.social && action.data.social.instagram ? action.data.social.instagram : null,
                    facebook: action.data.social && action.data.social.facebook ? action.data.social.facebook : null,
                    youtube: action.data.social && action.data.social.youtube ? action.data.social.youtube : null
                }
            };
        case CHANGE_PROFILE_FIELD:
            return{ ...state, [action.eventName]: action.eventValue };
        case PROFILE_ERROR:
            let newError = { msg: action.msg, status: action.errStatus };
            return { ...state, isProfile: false, error: newError };
        case CLEAR_PROFILE:
            return { ...state, isProfile: false, company: "", website: "", location: "", status: "", profession: "", skills: "", bio: "", banner: "", githubname: "", telegram: "", vk: "", linkedin: "", twitter: "", instagram: "", facebook: "", youtube: "", currUser: null, currProfile: null, currEducation: null, currExperience: null, };
        case GET_ALL_PROFILES:
            return { ...state, profiles: action.profiles };
        case IS_PROFILE:
            return { ...state, isProfile: action.isProfile };
        case GET_REPOS:
            return { ...state, repos: action.repos };
        default:
            return { ...state };
    }
};

export const isProfileAC = (isProfile) => ({ type: IS_PROFILE, isProfile });
export const getCurrentProfileAC = (data) => ({ type: GET_CURRENT_PROFILE, data });
export const getReposAC = (repos) => ({ type: GET_REPOS, repos});
export const getAllProfilesAC = (profiles) => ({ type: GET_ALL_PROFILES, profiles });
export const changeProfileFieldAC = (eventName, eventValue) => ({type: CHANGE_PROFILE_FIELD, eventName, eventValue});
export const clearProfileAC = () => ({ type: CLEAR_PROFILE });
export const getProfileAC = (profile) => ({ type: GET_PROFILE, profile});
export const profileErrorAC = (msg, errStatus) => ({ type: PROFILE_ERROR, msg, errStatus });
export default profileReducer;