import React from 'react';
import styles from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/images.jpg';

class Users extends React.Component {
    constructor(props) {
        super(props);
        try {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(resolve => resolve.data.items)
                .then(resolve => props.setUsers(resolve));
        }
        catch (error) {
            console.log('Error getUsers func: ', error.response);
        }
    }

    render() {
        return(
            <div>
                {
                    this.props.users.map(u => <div key={u.id}>
                        <span>
                            <div>
                                <img className={styles.userAvatar} src={u.photos.small !== null ? u.photos.small : userPhoto } alt='avatar' />
                            </div>
                                { u.followed 
                                ? <button onClick={() => { this.props.unfollow(u.id) }}>Unfollow</button>
                                    :
                                    <button onClick={() => { this.props.follow(u.id) }}>Follow</button>
                                }
                        </span>
                        <span>
                            <span>
                                <div>{u.fullName}</div>
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
}
export default Users;