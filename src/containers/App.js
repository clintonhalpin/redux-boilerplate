import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import Header from './../components/Header';


class App extends Component {
  render() {
    const { children, page } = this.props
    return (
      <div>
        <Header />
        <div className="col col-12 p2">
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