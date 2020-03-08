import React from 'react';
import './Profile.css';
import Profile from './Profile';
import { connect } from 'react-redux';
import { getUserProfile, getProfileStatus, updateProfileStatus } from './../../redux/profile-reducer'; 
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId) {
            userId = this.props.userId;
            if(!userId){
                this.props.history.push(`profile/${userId}`)
            }
        }
        this.props.getUserProfile(userId);
        this.props.getProfileStatus(userId);
    }

    render() {
        return (
            <div>
                <Profile {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.authReducer.userId,
    isAuth: state.authReducer.isAuth
});

export default compose(
    connect(mapStateToProps, { 
        getUserProfile,
        getProfileStatus,
        updateProfileStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)