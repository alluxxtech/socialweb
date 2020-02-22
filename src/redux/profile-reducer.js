import { userApi, profileApi } from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_PROFILE_STATUS = 'SET_PROFILE_STATUS';
const UPDATE_PROFILE_STATUS = 'UPDATE_PROFILE_STATUS';

export const addPostActionCreator = (value) => ({
    type: ADD_POST, value
});

const setUserProfile = (profile) => ({
    type: SET_USER_PROFILE, profile
});
const setProfileStatus = status => ({
    type: SET_PROFILE_STATUS, status
});

const updateProfileStatusAction = (status) => ({
    type: UPDATE_PROFILE_STATUS, status
});

export const getUserProfile = userId => dispatch => {
    userApi.getProfile(userId).then(resolve => {
        dispatch(setUserProfile(resolve.data))
    });
}

export const getProfileStatus = userId => dispatch => {
    profileApi.getStatus(userId)
        .then(resolve => { 
            dispatch(setProfileStatus(resolve.data))
    })
}

export const updateProfileStatus = status => dispatch => {
    profileApi.updateStatus(status).then(resolve => {
        if (resolve.data.resultCode === 0){
            dispatch(updateProfileStatusAction(status))
        }
    })
}

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 23 },
        { id: 2, message: 'Its my first post', likesCount: 2 }
    ],
    newPostText: 'itkamasutra',
    profile: null,
    status: null
};

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            const newPost = {
                id: 3,
                message: action.value,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }
        case SET_USER_PROFILE: 
            return {
                ...state,
                profile: action.profile
            }
        case SET_PROFILE_STATUS:
            return {
                ...state,
                status: action.status
            }
        case UPDATE_PROFILE_STATUS: 
            return {
                ...state,
                status: action.status
            }
        default:
            return state
    }
}

export default profileReducer;