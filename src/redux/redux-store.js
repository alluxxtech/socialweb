import { createStore, combineReducers, applyMiddleware } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer} from 'redux-form';


const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authReducer,
    form: formReducer
});

const store = createStore(reducers, applyMiddleware(thunk));
window.store = store;

export default store;
