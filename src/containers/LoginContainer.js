import React from 'react'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import Login from '../components/Login'
import {hideAlert, logIn} from "../redux/actions/sessionActions";

const LoginContainer = ({isAuth, ...rest}) => {
    return (
        (isAuth)
            ? <Redirect to="/profile" />
            : <Login {...rest} />
    )
}



const mapStateToProps = state => {
    return {
        isAuth : state.session.user.isAuth,
        error: state.session.errorMsg
    }
}

const mapDispatchToProps = dispatch => {
    return ({
        hideAlert: () => dispatch(hideAlert()),
        logIn: (params) => dispatch(logIn(params))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginContainer);
