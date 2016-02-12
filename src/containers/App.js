import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'

class App extends Component {
  render() {
    const { children, page } = this.props
    return (
      <div>
        <div className="p2">
          <h1 className="m0">Page:  <span className="green">{page || 'index'}</span> </h1>
        </div>
        <div className="p2">
          {children}
        </div>
      </div>
    )
  }
}

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