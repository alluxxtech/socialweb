import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    isAuth: state.authReducer.isAuth
})

export const withAuthRedirect  = (Component) => {
    // const RedirectComponent = class withAuthRedirectContainer extends React.Component {
    //     render() {
    //         if (!this.props.isAuth) 
    //             return <Redirect to='/login' />

    //         return (
    //             <Component {...this.props}/>
    //         )
    //     }
    // }

    const RedirectComponent = props => {
        if (!props.isAuth)
            return <Redirect to='/login' />
        return (
            <Component {...props}/>
        )
    }
    return connect(mapStateToProps)(RedirectComponent);
}