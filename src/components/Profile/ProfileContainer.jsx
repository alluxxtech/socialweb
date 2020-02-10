import React from 'react';
import './Profile.css';
import Profile from './Profile';
import axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from './../../redux/profile-reducer'; 

class ProfileContainer extends React.Component {

    componentDidMount() {
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
                .then(resolve => {
                        this.props.setUserProfile(resolve.data);
                    }
                );
        }
        catch(error) {
            console.log('Error getUsers func: ', error.response);
        }
    }

    render() {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

export default connect(mapStateToProps, {
    setUserProfile
}) (ProfileContainer);
