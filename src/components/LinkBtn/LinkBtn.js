import React from 'react'
import {Link} from 'react-router-dom'
import s from './LinkBtn.module.css'


const LinkBtn  = ({to,label}) => {
    return (
        <Link style={{textDecoration: 'none'}} className={s.item} to={to}>
            <span >{label}</span>
        </Link>
    );
}

export default LinkBtn;