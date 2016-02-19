import React, { Component, PropTypes } from 'react';


export class App extends Component {
  render() {
    const { children } = this.props
    return (
      { children }
    )
  }
};
