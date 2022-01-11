import { dalApi } from "../dal/api"

let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let FOLLOW = 'FOLLOW'
let SET_USERS = 'SET_USERS'
let UNFOLLOW = 'UNFOLLOW'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let TOGGLE_IS_FOLLOWING = 'TOGGLE_IS_FOLLOWING'



let initialState = {
    users: [],
    pageSize: 3,
    currentPage: 1,
    totalUsers: 0,
    isFetching: true,
    followingInProcces: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: true
                        }
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {
                            ...user,
                            followed: false
                        }
                    }
                    return user
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [
                    ...action.users
                ]
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsers: action.totalUsers
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLOWING:
            return {
                ...state,
                followingInProcces: action.followingInProcces
                    ? [...state.followingInProcces, action.userId]
                    : state.followingInProcces.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}


export const follow = (userId) => ({
    type: FOLLOW,
    userId
})

export const unfollow = (userId) => ({
    type: UNFOLLOW,
    userId
})
export const setUsers = (users) => ({
    type: SET_USERS,
    users
})
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage
})

export const setTotalUsersCount = (totalUsers) => ({
    type: SET_TOTAL_USERS_COUNT,
    totalUsers
})

export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
})
export const toggleIsFollowing = (followingInProcces, userId) => ({
    type: TOGGLE_IS_FOLLOWING,
    followingInProcces,
    userId
})




export const getUsersThunk = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true))
    dalApi.getUsers(currentPage, pageSize)
        .then(data => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount / 300))
        })
}
export const unfollowThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    dalApi.unfollowUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(unfollow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}
export const followThunk = (userId) => (dispatch) => {
    dispatch(toggleIsFollowing(true, userId))
    dalApi.followUser(userId)
        .then(data => {
            if (data.resultCode == 0) {
                dispatch(follow(userId))
            }
            dispatch(toggleIsFollowing(false, userId))
        })
}

export default usersReducer;