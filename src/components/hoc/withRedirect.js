import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

let withAuthRedirect = (Component) => {

    let redirectComponent = (props) => {
        if (!props.isAuth) return <Navigate to='/login' />
        return <Component {...props} />
    }


    return connect(mapStateToProps)(redirectComponent)
}

export default withAuthRedirect