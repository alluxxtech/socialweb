import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleFetching } from '../../redux/users-reducer';
import * as axios from 'axios';
import { Preloader } from '../preloader/Preloader';


class UsersComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true);
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(resolve => {
                        this.props.toggleFetching(false);
                        this.props.setUsers(resolve.data.items);
                        this.props.setTotalUsersCount(resolve.data.totalCount);
                    }
                );
        }
        catch(error) {
            console.log('Error getUsers func: ', error.response);
        }
    }
    onPageChanged = (pageNumber) => {
        this.props.toggleFetching(true);
        this.props.setCurrentPage(pageNumber);
        try {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
                .then(resolve => {
                    this.props.setUsers(resolve.data.items);
                    this.props.toggleFetching(false);
                });
        }
        catch (error) {
            console.log('Error getUsers func: ', error.response);
        }
    }
    render() {
        return <div>
            <Preloader isFetching={this.props.isFetching}/>
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
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching
});
const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersComponent);