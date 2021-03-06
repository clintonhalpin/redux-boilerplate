import React, { Component, PropTypes } from 'react';
import * as actionTypes from './../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import User from './../components/User';
import Header from './../components/Header';

class UserPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { actions, username } = this.props;
    actions.fetchUserIfNeeded(username);
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Header title="Back" />
        <div className="col col-12 p2">
          { !user.data && <h1 className="center">Loading...</h1> }
          { user.data && <User user={user.data} /> }
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  const { user } = state;
  return {
    user,
    username: props.params.username
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators(actionTypes.default, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(UserPage);

