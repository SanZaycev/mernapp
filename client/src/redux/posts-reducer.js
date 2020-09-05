import { CHANGE_POST_FIELD, GET_POSTS, POSTS_ERROR, POSTS_LOADING, CLEAR_POSTS, UPDATE_LIKES } from "./constants";

const initialState = {
    allPosts: [],
    post: null,
    isLoading: true,
    errors: null
};

const postsReducer = (state= initialState, action) => {
    switch (action.type){
        case POSTS_LOADING:
            return { ...state, isLoading: action.isLoading };
        case CHANGE_POST_FIELD:
            return{ ...state, [action.eventName]: action.eventValue };
        case POSTS_ERROR:
            let newError = { msg: action.msg, status: action.errStatus };
            return { ...state, error: newError };
        case CLEAR_POSTS:
            return { ...state, allPosts: [], post: null, loading: true };
        case GET_POSTS:
            return { ...state, allPosts: action.posts };
        case UPDATE_LIKES:
            return { ...state, allPosts: action.posts };
        default:
            return { ...state };
    }
};

export const updateLikesAC = (id) => ({ type: UPDATE_LIKES, id });
export const changePostField = (eventName, eventValue) => ({ type: CHANGE_POST_FIELD, eventName, eventValue });
export const clearPostsAC = () => ({ type: CLEAR_POSTS });
export const postsLoadingAC = (isLoading) => ({ type: POSTS_LOADING, isLoading });
export const getPostsAC = (posts) => ({ type: GET_POSTS, posts});
export const postsErrorAC = (msg, errStatus) => ({ type: POSTS_ERROR, msg, errStatus });
export default postsReducer;