import { authApi } from './../api/api';
import { stopSubmit } from 'redux-form';

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';

const setAuthUserData = (userId, email, login, isAuth) => ({ 
    type: SET_AUTH_USER_DATA,
    data: {
        userId,
        email,
        login,
        isAuth
    }
});

export const getAuthUserData = () => dispatch => {
    return authApi.me().then(resolve => {
            if (resolve.data.resultCode === 0) {
                const { id, email, login } = resolve.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
}

export const login = (email, password, rememberMe) => dispatch => {
    authApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            const action = stopSubmit('login', { _error: response.data.messages.length > 0 ?
                response.data.messages[0] : 'some error'    
            })
            dispatch(action);
        }
    })
}
export const logout = () => dispatch => {
    authApi.logout().then(resolve => {
        if (resolve.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));

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
                ...action.data
            }
        default:
            return state;
    }
}
export default authReducer;

