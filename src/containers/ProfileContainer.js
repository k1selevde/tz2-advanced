import React from 'react'
import {connect} from 'react-redux'
import {Profile} from '../components/Profile'
import {getProfile} from "../redux/actions/profileActions";

class ProfileContainer extends React.Component {
    componentWillMount() {
       this.props.getProfile(this.props.userId)
    }

    render() {
        const {user,isFetch} = this.props
        return (<Profile user={user} isFetch={isFetch}/>)
    }
}

const mapStateToProps = state => ({
    userId: state.session.user.id,
    user: state.profile.user,
    isFetch: state.profile.isFetching
})

const mapDispatchToProps = dispatch => {
    return ({
        getProfile: (id) => dispatch(getProfile(id))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ProfileContainer)