import React from 'react';
import Users from './Users';
import {connect} from 'react-redux';
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleFetching, toggleFollowedProcess } from '../../redux/users-reducer';
import { Preloader } from '../preloader/Preloader';
import { userApi } from '../../api/api';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { getUsers, getPageSize, getTotalUsersCount, getPage, getIsFetching, getFollowedUsers, getUsersReselect } from '../../redux/user-selectors';

class UsersComponent extends React.Component {
    componentDidMount() {
        const { currentPage, pageSize } = this.props;
        this.props.toggleFetching(true);
        try {
            userApi.getUsers(currentPage, pageSize)
                .then(resolve => {
                        this.props.toggleFetching(false);
                        this.props.setUsers(resolve.items);
                        this.props.setTotalUsersCount(resolve.totalCount);
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
            userApi.getUsersByUser(pageNumber, this.props.pageSize)
                .then(resolve => {
                    this.props.toggleFetching(false);
                    this.props.setUsers(resolve.items);
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
    users: getUsersReselect(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getPage(state),
    isFetching: getIsFetching(state),
    followedUsers: getFollowedUsers(state)
});
const mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleFetching,
    toggleFollowedProcess
};

export default compose(
    // withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersComponent)
