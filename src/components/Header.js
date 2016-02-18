import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const Header = ({title}) => {
    return(
        <div className="col col-12 p2 bg-blue">
            <p className="m0"><Link to="/" className="white">{ title }</Link></p>
        </div>
    )
}

Header.propTypes = {
  title: React.PropTypes.string
};

export default Header;
