import React, {useState} from 'react'
import s from './NewsItem.module.css'

const NewsItem = ({article}) => {
    const [icon, setIcon] = useState(true)
    const changeIcon = () => {
        setIcon(!icon)
    }

    return (
        <div style={{width: '300px', marginRight: '20px'}}>
            <h3>{article.title}</h3>
            <p>{article.text}</p>
            <div onClick={changeIcon} className={icon ? s.icon : `${s.icon} ${s.iconBad}`}></div>
        </div>
    )
}

export default NewsItem