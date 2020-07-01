import React from 'react'
import {connect} from 'react-redux'
import {useHistory} from 'react-router-dom'
import {logOut} from '../../redux/actions/sessionActions'
import {newsClear} from "../../redux/actions/newsActions"
import {profileClear} from '../../redux/actions/profileActions'
import LinkBtn from '../LinkBtn/LinkBtn'
import './Navbar.scss'


const Navbar = (props) => {
    const history = useHistory()

    const logoutHandler = event => {
        event.preventDefault()
        props.logOut();
        props.profileClear();
        props.newsClear();
        history.push('/')
    }

    return (
        <nav>
            <div className="navMenu">
                <LinkBtn  to="/" label={"Home"}></LinkBtn>
                <LinkBtn to="/login" label={"Login"}></LinkBtn>
                <LinkBtn to="/profile" label={"Profile"}></LinkBtn>
                <LinkBtn to="/news" label={"News"}></LinkBtn>
                <LinkBtn to="/Articles" label={"Articles"}></LinkBtn>
                <a href="/" onClick={logoutHandler} className="exitBtn">Выйти</a>
            </div>
        </nav>
    )
}

export default connect(null, {logOut, profileClear, newsClear})(Navbar);