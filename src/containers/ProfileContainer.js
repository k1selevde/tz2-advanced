import React from 'react'
import {connect} from 'react-redux'
import {Profile} from '../components/Profile'
import {getProfile} from "../redux/actions/profileActions";

class ProfileContainer extends React.Component {
    componentWillMount() {
        this.props.getProfile(this.props.userId)
    }

    render() {
        const {user} = this.props
        return (user && <Profile user={user}/>)
    }
}

const mapStateToProps = state => ({
    userId: state.session.user.id,
    user: state.profile.user
})

const mapDispatchToProps = dispatch => {
    return ({
        getProfile: (id) => dispatch(getProfile(id))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)