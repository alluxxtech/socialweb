
import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='alt text' />
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo;
