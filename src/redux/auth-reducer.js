import { authApi } from './../api/api';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const setAuthUserData = (userId, email, login) => ({ 
    type: SET_AUTH_USER_DATA,
    data: {
        userId,
        email,
        login
    }
});

export const getAuthUserData = () => dispatch => {
    authApi.me().then(resolve => {
            if (resolve.data.resultCode === 0) {
                const { id, email, login } = resolve.data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}
export default authReducer;

