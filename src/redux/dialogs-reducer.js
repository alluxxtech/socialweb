const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';

export const addMessageActionCreator = message => ({
    type: SEND_MESSAGE, message
});
export const updateNewMessageBody = message => ({
    type: UPDATE_NEW_MESSAGE_BODY, newMessage: message
});

const initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    if (action.type === SEND_MESSAGE) {
        const newMessage = {
            id: 8,
            message: action.message
        }
        return {
            ...state,
            messages: [...state.messages, newMessage],
        }
    }
    return state;
}
export default dialogsReducer;