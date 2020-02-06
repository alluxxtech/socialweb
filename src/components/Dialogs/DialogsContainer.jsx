import { addMessageActionCreator, updateNewMessageBody } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'; 

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageBody: state.dialogsPage.newMessageBody
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => { 
            dispatch(updateNewMessageBody(text))
        },  
        onSendMessageClick: () => { 
            dispatch(addMessageActionCreator())
        } 
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;