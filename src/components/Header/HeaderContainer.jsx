import React from 'react';
import Header from './Header';
// import axios from 'axios';
// import s from './Header.module.css';
import { connect } from 'react-redux';
import { logout } from './../../redux/auth-reducer';
import { getAuthUserData } from './../../redux/auth-reducer';
// import { authApi } from './../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        try {
            this.props.getAuthUserData()
            // authApi.me()
            // .then(resolve => {
            //     if(resolve.data.resultCode === 0){
            //         const { id, email, login } = resolve.data.data; 
            //         this.props.setAuthUserData(id, email, login);
            //     }
            // })
        }
        catch(e) {
            console.log('Error auth/me get response', e.response);
        }
    }
    render() {
        return (
            <Header {...this.props} />
        )
    }
};

const mapStateToProps = (state) => ({
    login: state.authReducer.login,
    isAuth: state.authReducer.isAuth
}) 

export default connect(mapStateToProps, {
    getAuthUserData,
    logout
}) (HeaderContainer);