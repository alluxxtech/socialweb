import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
        props.setUsersAc([
            { id: '1', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Serhii', status: 'iam a boss', location: { city: 'Kyiv', country: 'Ukraine' } },
            { id: '2', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Andriy', status: 'iam a boss too', location: { city: 'Moskov', country: 'Russia' } },
            { id: '3', photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg', followed: false, fullName: 'Vania', status: 'iam a boss too', location: { city: 'Minsk', country: 'Belorus' } }
        ])
    }
    return(
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.userAvatar}src={u.photoUrl} alt='avatar' />
                        </div>
                            { u.followed 
                            ? <button onClick={() => { props.unfollow(u.id) }}>Unfollow</button>
                                :
                                <button onClick={() => { props.follow(u.id) }}>Follow</button>
                            }
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}!</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}
export default Users;