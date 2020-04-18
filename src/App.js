import React from 'react';
import {Switch,Route} from "react-router-dom/";
import {connect} from "react-redux"
import {Routes} from './components/Routes'
import Navbar from './components/Navbar/Navbar'
import './App.css';

function App(props) {
  return (
    <div className="container">
        <header className="header">
            <span className="logo">
                Almost before we knew it
            </span>
            <span>LOGOTYPE HERE WATCH</span>
            {props.isAuth && <Navbar />}
        </header>

        <div className="content">
            <Routes isAuth={props.isAuth}/>
        </div>

    </div>
  );
}

const mapStateToProps = (state) => ({
    isAuth: state.session.user.isAuth
})
export default connect(mapStateToProps)(App);
