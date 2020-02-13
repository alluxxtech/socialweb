import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={s.header}>
            <img src='https://dynamic.brandcrowd.com/asset/logo/9a5e4b4f-7ea4-47ff-9a59-d5a3bdd2751b/logo?v=4' alt='alternative text' />
            <div className={s.authIcon}>
                { props.isAuth ?
                props.login :
                <NavLink to='/login'>
                    Login
                </NavLink> }
            </div>
        </div>

    )
};

export default Header;