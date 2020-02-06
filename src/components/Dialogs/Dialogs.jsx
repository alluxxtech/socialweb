import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
    //const { dialogsPage: { dialogs, messages, newMessageBody}} = props;
    const onSendMessageClick = () => {
        props.onSendMessageClick();
    }
    const updateMessageText = (e) => {
        props.updateMessageText(e.target.value)
    }
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
                <div>
                    <div>
                        <textarea 
                            placeholder='Enter your message'
                            value={props.newMessageBody}
                            onChange={updateMessageText}
                        >
                        </textarea>
                    </div>
                        <button
                            onClick={onSendMessageClick}    
                        >
                            send message
                        </button>
                    <div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;