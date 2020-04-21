import React from 'react'

export default ({user}) => {
    return (
        <div className="userInfoContainer">
            <p>userID: {user.userId}</p>
            <p>city: {user.city}</p>
            <p>LANGUAGES:</p>
            {user.languages.map(lang => <div><span>{lang}</span> <br/> </div> )}
            <br />
            <br/>
            <p>SOCIAL:</p>
            {user.social.map(soc => <div><a href={soc.link}>{soc.label}</a></div>)}
        </div>
    )
}