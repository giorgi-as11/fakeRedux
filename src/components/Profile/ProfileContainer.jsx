import React from 'react'
import Profile from './Profile'
import { setProfilePage, profilePageThunk } from '../../redux/profileReducer'
import { connect } from 'react-redux'
import { Navigate, useMatch } from 'react-router'
import { dalApi } from '../../dal/api'
import withAuthRedirect from '../hoc/withRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {

    componentDidMount() {
        let match = this.props.match
        let userId
        if (!match) {
            userId = 21309
        } else {
            userId = this.props.match.params.userId
        }

        this.props.profilePageThunk(userId)


    }

    render() {

        if (!this.props.isAuth) return <Navigate to='/login' />
        return (
            <Profile {...this.props} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,

})

let mapDispatchToProps = {
    setProfilePage,
    profilePageThunk
}

const ProfileMatch = (props) => {
    let match = useMatch("/profile/:userId")
    return (
        <ProfileContainer {...props} match={match} />
    )
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileMatch)