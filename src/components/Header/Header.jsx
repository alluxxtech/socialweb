import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img src='https://dynamic.brandcrowd.com/asset/logo/9a5e4b4f-7ea4-47ff-9a59-d5a3bdd2751b/logo?v=4' alt='alternative text' />
        </header>
    )
};

export default Header;