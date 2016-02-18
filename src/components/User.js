import React from 'react';

const User = ({user}) => {
    return(
        <div className="center">
            <img src={user.avatar_url} className="circle" width="140" />
            <div className="p2">
                <h1 className="m0">{user.name} <span className="h3 gray light">{user.login}</span></h1>
                <p>Public Repos: <b>{user.public_repos}</b></p>
            </div>
        </div>
    )
}

export default User;