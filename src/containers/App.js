import React, { Component, PropTypes } from 'react';


export class App extends Component {
  render() {
    console.log(this.props);
    const { children } = this.props
    return (
      { children }
    )
  }
};