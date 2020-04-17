import React from 'react';
import {Route, Switch, Redirect} from "react-router-dom";
import Home from "./Home";
import NewsContainer from "../containers/NewsContainer";
import LoginContainer from "../containers/LoginContainer";
import ProfileContainer from "../containers/ProfileContainer";
import NotFound from "./NotFound/NotFound";

export const Routes = ({isAuth}) => {
    if (isAuth) {
        return (
            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/Login" component={LoginContainer} ></Route>
                <Route path="/News" component={NewsContainer} ></Route>
                <Route path="/Profile" component={ProfileContainer} ></Route>
                <Route component={NotFound} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route path="/login" exact>
                <LoginContainer />
            </Route>
            <Redirect to="/login" />
        </Switch>
    )

}

