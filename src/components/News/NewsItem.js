import React from 'react'

const NewsItem = ({article}) => {
    return (
        <div style={{width: '300px', marginRight: '20px'}}>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
        </div>
    )
}

export default NewsItem