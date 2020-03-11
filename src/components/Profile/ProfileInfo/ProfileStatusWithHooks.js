
import React, { useState, useEffect } from 'react';
// import s from './ProfileInfo.module.css';

const ProfileStatusWithHooks = props => {

    const [editMode, setEditMode] = useState(false);
    const onActivateEditState = () => {
        setEditMode(true)
    }

    useEffect(() => {
        setStatus(props.status)
    },[props.status])
    const [status, setStatus] = useState(props.status);

    const onChangeStatus = (e) => {
        setStatus(e.target.value)
    }

    const onLeaveEditState = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
    }

    return (
        <div>
            {
                !editMode && <div>
                    <span onClick={() => onActivateEditState()}>
                        {props.status}
                    </span>
                </div>
            }
            {
                editMode && <div>
                    <input
                        autoFocus={true} 
                        onBlur={onLeaveEditState} 
                        value={status}
                        onChange={onChangeStatus}>
                    </input>
                </div>
            }
        </div>
    )
};

export default ProfileStatusWithHooks;
