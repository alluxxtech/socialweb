import React from 'react';
import Header from './Header';
import axios from 'axios';
import s from './Header.module.css';
import { connect } from 'react-redux';
import { setAuthUserData } from './../../redux/auth-reducer';

class HeaderContainer extends React.Component {
    componentDidMount() {
        try {
            axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
                withCredentials: true
            })
            .then(resolve => {
                if(resolve.data.resultCode === 0){
                    const { id, email, login } = resolve.data.data; 
                    this.props.setAuthUserData(id, email, login);
                }
            })
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
    setAuthUserData
}) (HeaderContainer);