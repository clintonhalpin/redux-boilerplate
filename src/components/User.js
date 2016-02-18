import React from 'react';

const User = ({user}) => {
    return(
        <div className="p2">
            <img src={user.avatar_url} />
        </div>
    )
}

export default User;