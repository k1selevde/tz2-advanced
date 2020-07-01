import React from 'react'
import {NavLink,Switch, Route} from 'react-router-dom'
import LoginContainer from "../../containers/LoginContainer";
import Article from "./Arcticle";

const articles = ['firt', 'econd', 'third', 'erwer','ewrr']

const Articles  = () => {
    return (
        <div>
            <div>
                {articles.map(art => (
                    <div style={{border: '1px solid blue', width: '200px'}}>
                        <NavLink to={`/Articles/${art}`} >{art}</NavLink>
                    </div>
                ))}
            </div>
            <Switch>
                <Route path={`/Articles/:id`} render={({match}) => {
                    return <Article url= {match.url} name={match.params.id}/>
                }}  />
            </Switch>
        </div>
    );
}

export default Articles;