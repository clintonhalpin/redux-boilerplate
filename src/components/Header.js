import React from 'react';
import { Link } from 'react-router';

const Header = () => {
    return(
        <div className="col col-12 p2 bg-black">
            <p className="m0"><Link to="/" className="white">Github Users</Link></p>
        </div>
    )
}

export default Header;