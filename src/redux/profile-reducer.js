import { userApi } from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});
const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});

export const getUserProfile = userId => dispatch => {
    userApi.getProfile(userId).then(resolve => {
        dispatch(setUserProfile(resolve.data))
    });
}

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 23 },
        { id: 2, message: 'Its my first post', likesCount: 2 }
    ],
    newPostText: 'itkamasutra',
    profile: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case UPDATE_NEW_POST_TEXT: 
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }
}

export default profileReducer;