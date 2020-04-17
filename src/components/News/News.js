import React from 'react'
import NewsItem from "./NewsItem";

export const News  = props => {
    return (
        <div className="container">
            <h4>NEWS</h4>
            <div style={{display: 'flex'}}>
                {props.data.map(article => <NewsItem article={article} />)}
            </div>

        </div>
    );
}


