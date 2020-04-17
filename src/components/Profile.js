import React from 'react'

export const Profile  = ({user}) => {
    return (
        <div>
            <span>It's user Profile</span>
            <p>userID: {user.userId}</p>
            <p>city: {user.city}</p>
            <p>LANGUAGES:</p>
            {user.languages.map(lang => <div><span>{lang}</span> <br/> </div> )}
            <br />
            <br/>
            <p>SOCIAL:</p>
            {user.social.map(soc => <div><a href={soc.link}>{soc.label}</a></div>)}
            {/*<p>{user.userId}</p>*/}
            {/*<p>{user.city}</p>*/}
            {/*<p>{user.social}</p>*/}
        </div>
    );
}

