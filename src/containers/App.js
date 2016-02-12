import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Link } from 'react-router';

class App extends Component {
  render() {
    const { children, page } = this.props
    return (
      <div>
        <div className="col col-12 p2 bg-black">
          <p className="m0"><Link to="/" className="white">Github Users</Link></p>
        </div>
        { !children && 
          <div className="container p2 py4">
            <div className="col col-12">
              <Link to="/clintonhalpin">Clinton Halpin</Link>
            </div> 
          </div> 
        }
        <div className="p2">
          {children}
        </div>
      </div>
    )
  }
};

const mapStateToProps = (
  state
) => {
  return {
    ...state
  };
};

export default connect(
  mapStateToProps,
  null
)(App);