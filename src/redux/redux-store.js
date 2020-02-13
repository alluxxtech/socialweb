import { createStore, combineReducers } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';
import usersReducer from './users-reducer';
import authReducer from './auth-reducer';

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sideBar: sidebarReducer,
    usersPage: usersReducer,
    authReducer
});

const store = createStore(reducers);
window.store = store;

export default store;
