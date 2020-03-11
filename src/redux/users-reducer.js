const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FETCHING = 'TOGGLE_FETCHING';
const TOGGLE_FOLLOWED_PROGRESS = 'TOGGLE_FOLLOWED_PROGRESS';

export const follow = userId => ({ type: FOLLOW, userId });
export const unfollow = userId => ({ type: UNFOLLOW, userId });
export const setUsers = users => ({ type: SET_USERS, users });
export const setCurrentPage = currentPage => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = totalUsers => ({ type: SET_TOTAL_USERS_COUNT, totalUsers });
export const toggleFetching = isFetching => ({ type: TOGGLE_FETCHING, isFetching}); 
export const toggleFollowedProcess = (isFollowingInProcess, userId) => ({ type: TOGGLE_FOLLOWED_PROGRESS, isFollowingInProcess, userId}) 

const initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followedUsers: [],
    portionSize: 10
};

const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? {...u, followed: true} : u)
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => u.id === action.userId ? { ...u, followed: false } : u)
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE: 
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_TOTAL_USERS_COUNT: 
            return {
                ...state,
                totalUsersCount: action.totalUsers
            }
        case TOGGLE_FETCHING: 
            return {
                ...state,
                isFetching: action.isFetching      
            }
        case TOGGLE_FOLLOWED_PROGRESS:
            console.log('TOGGLE_FOLLOWED_PROGRESS: ', state.followedUsers);
            console.log('action.userId: ', action.userId);
            return {
                ...state,
                followedUsers: action.isFollowingInProcess ? 
                    [...state.followedUsers, action.userId] : 
                    state.followedUsers.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export default usersReducer;