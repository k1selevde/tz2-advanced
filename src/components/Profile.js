import React from 'react'
import UserInfo from './UserInfo'

export const Profile  = ({user,isFetch}) => {
    return (
        <div>
            <p>It's user Profile</p>

            {isFetch && !Boolean(user) && <strong>Загрузка . . .</strong>}
            {user && <UserInfo user={user}/>}
        </div>
    );
}

