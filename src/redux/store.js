import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'Hi, how are you?', likesCount: 23 },
                { id: 2, message: 'Its my first post', likesCount: 2 }
            ],
            newPostText: 'itkamasutra'
        },
        dialogsPage: {
            dialogs: [
                { id: 1, name: 'Dimych' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Sasha' },
                { id: 4, name: 'Andrey' },
                { id: 5, name: 'Valera' }
            ],
            messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'How is your it' },
                { id: 3, message: 'yo' },
                { id: 4, message: 'yo1' }
            ],
            newMessageBody: ''
        },
        sideBar: {

        }
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('state changed');
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sideBar = sidebarReducer(this._state.sideBar, action);
        this._callSubscriber(this._state);
    }
}

export default store;