const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

export const addPostActionCreator = () => ({
    type: ADD_POST
});
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT, newText: text
});

const initialState = {
    posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 23 },
        { id: 2, message: 'Its my first post', likesCount: 2 }
    ],
    newPostText: 'itkamasutra'
};

const profileReducer = (state = initialState, action) => {
    if (action.type === ADD_POST) {
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
    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        return {
            ...state,
            newPostText: action.newText
        }
    }
    return state;
}

export default profileReducer;