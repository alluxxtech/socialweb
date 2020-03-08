import { getAuthUserData} from './auth-reducer';

const INITIALIZE_APP = 'INITIALIZE_APP';

const initApp = () => ({type: INITIALIZE_APP});

export const initializeApp = () => async dispatch => {
    await dispatch(getAuthUserData());
    await dispatch(initApp());
}

const initialState = {
    initialized: false
}

const initReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZE_APP:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
} 

export default initReducer;

