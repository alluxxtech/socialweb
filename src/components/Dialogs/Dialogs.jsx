import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import { Redirect } from 'react-router-dom';
import { Field, reduxForm } from 'redux-form';
import { TextArea } from '../common/FormsControls/formsControl';
import { required, maxLengthCreator } from '../../utils/validators/validators';

const Dialogs = (props) => {
    //const { dialogsPage: { dialogs, messages, newMessageBody}} = props;
    const onClickAddNewMessage = (data) => {
        props.addNewMessage(data.bodyMessage);
    }

    if(!props.isAuth) return <Redirect to='/login'/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((item, index) =>
                    <DialogItem key={index} name={item.name} id={item.id} />
                )}
            </div>
            <div className={s.messages}>
                {props.messages.map((item, index) => {
                    return(
                        <Message key={index} message={item.message}/>
                    )
                })}
                <SendMessageReduxForm onSubmit={onClickAddNewMessage}/>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const addMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                placeholder='Enter your message'
                validate={[required, maxLength50]}
                name={'bodyMessage'}
                component={TextArea}
            >
            </Field>
            <button>
                send message
            </button>
        </form>
    )
}

const SendMessageReduxForm = reduxForm({
    form: 'sendMessageForm'
})(addMessageForm)

export default Dialogs;