import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import {
    follow, setCurrentPage, setTotalUsersCount, setUsers, toggleIsFetching, unfollow, toggleIsFollowing, getUsersThunk, unfollowThunk, followThunk
} from "../../redux/UsersReducer";
import withAuthRedirect from "../hoc/withRedirect";
import Users from "./Users";



let mapStateToProps = (state) => {
    return {
        usersData: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        totalUsers: state.usersPage.totalUsers,
        isFetching: state.usersPage.isFetching,
        followingInProcces: state.usersPage.followingInProcces
    }
}

let mapDispatchToProps = {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleIsFollowing,
    getUsersThunk,
    unfollowThunk,
    followThunk
}
class UsersCC extends React.Component {
    componentDidMount = () => {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (p) => {
        this.props.setCurrentPage(p)
        this.props.getUsersThunk(p, this.props.pageSize)
    }

    render() {
        return <>

            <Users
                {...this.props}
                onPageChange={this.onPageChange}
            />
        </>
    }

}
let UsersContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(UsersCC)


export default UsersContainer