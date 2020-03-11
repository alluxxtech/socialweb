import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.jpg';
import { NavLink } from 'react-router-dom';
import { userApi } from '../../api/api';
import Pagination from '../common/Pagination/Pagination';

export default (containerProps) => {
    const { containerProps: props, onPageChanged} = containerProps; 
    
    return (
        <div>
            <Pagination {...{ onPageChanged, ...props }}/>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={styles.userAvatar} src={u.photos.small !== null ? u.photos.small : userPhoto } alt='avatar' />
                            </NavLink>
                        </div>
                            { u.followed ? 
                                <button 
                                    disabled={props.followedUsers.some(item => item === u.id)}
                                    onClick={() => {
                                        props.toggleFollowedProcess(true, u.id);
                                        userApi.unfollowUser(u.id)
                                        .then(resolve => {
                                            if (resolve.resultCode === 0) {
                                                props.unfollow(u.id) 
                                            }
                                            props.toggleFollowedProcess(false, u.id);
                                        })
                                    }}>
                                    Unfollow
                                </button> :
                                <button
                                    disabled={props.followedUsers.some(item => item === u.id)}
                                    onClick={() => {
                                        props.toggleFollowedProcess(true, u.id);
                                        userApi.followUser(u.id)
                                        .then(resolve => {
                                            if (resolve.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleFollowedProcess(false, u.id);
                                        }) 
                                    }}>
                                        Follow
                                </button>
                            }
                    </span> 
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.country'}</div>
                            <div>{'u.location.city'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}