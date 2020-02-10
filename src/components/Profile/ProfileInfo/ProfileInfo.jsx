
import React from 'react';
import s from './ProfileInfo.module.css';
import { Preloader } from '../../preloader/Preloader';

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader isFetching={true}/>
    }

    return (
        <div>
            <div>
                <img src='https://images.pexels.com/photos/459225/pexels-photo-459225.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='alt text' />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} alt='some'/>
                </div>
                ava+description
            </div>
        </div>
    )
};

export default ProfileInfo;
