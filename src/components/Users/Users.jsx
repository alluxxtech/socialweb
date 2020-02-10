import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/images.jpg';
import { NavLink } from 'react-router-dom';

export default (containerProps) => {
    const { containerProps: props, onPageChanged } = containerProps; 
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++){
        pages.push(i);
    }
    
    return (
        <div>
            <div>
                {pages.map(p =>
                    <span
                        onClick={(e)=> {
                            onPageChanged(p)
                        }} 
                        className={props.currentPage === p && styles.selectedPage}>
                        {p}
                    </span>
                )}
            </div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img className={styles.userAvatar} src={u.photos.small !== null ? u.photos.small : userPhoto } alt='avatar' />
                            </NavLink>
                        </div>
                            { u.followed 
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>
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