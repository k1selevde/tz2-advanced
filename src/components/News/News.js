import React from 'react'
import NewsItem from "./NewsItem";

export const News = props => {
    const {data, isLoad} = props;
    return (
        <div className="container">
            <h4>NEWS</h4>
            {isLoad && !data && <strong>Загрузка . . .</strong>}
            {data &&
            <div style={{display: 'flex'}}>
                {data.map(article => <NewsItem key={article.id} article={article}/>)}
            </div>
            }

        </div>
    );
}


