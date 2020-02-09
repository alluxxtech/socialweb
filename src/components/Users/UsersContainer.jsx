import React from 'react';
import  { Users } from './Users';
import {connect} from 'react-redux';
import { followAc, setUsersAc, unfollowAc, setCurrentPage, setTotalUsersCount } from '../../redux/users-reducer';
import * as axios from 'axios';

class UsersComponent extends React.Component {
    componentDidMount() {
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(resolve => {
                        this.props.setUsers(resolve.data.items);
                        this.props.setTotalUsersCount(resolve.data.totalCount)
                    }
                );
        }
        catch(error) {
            console.log('Error getUsers func: ', error.response);
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(resolve => this.props.setUsers(resolve.data.items));
        }
        catch (error) {
            console.log('Error getUsers func: ', error.response);
        }
    }
    render() {
        return <div>
            <Users 
                onPageChanged={this.onPageChanged}
                containerProps={this.props}
            />
        </div>
    }
}

const mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage 
});
const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAc(userId)),
    unfollow: (userId) => dispatch(unfollowAc(userId)),
    setUsers: users => dispatch(setUsersAc(users)),
    setCurrentPage: pageNumber => dispatch(setCurrentPage(pageNumber)),
    setTotalUsersCount: totalUsersCount => dispatch(setTotalUsersCount(totalUsersCount))
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);