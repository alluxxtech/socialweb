import Users from './Users';
import {connect} from 'react-redux';
import { followAc, setUsersAc, unfollowAc } from '../../redux/users-reducer';

const mapStateToProps = (state) => ({
    users: state.usersPage.users
});
const mapDispatchToProps = (dispatch) => ({
    follow: (userId) => dispatch(followAc(userId)),
    unfollow: (userId) => dispatch(unfollowAc(userId)),
    setUsers: users => dispatch(setUsersAc(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);