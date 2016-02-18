import React, { Component, PropTypes } from 'react';
import { fetchUserIfNeeded } from './../actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import User from './../components/User';

class UserPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch, username } = this.props;
    dispatch(fetchUserIfNeeded(username));
  }

  componentWillReceiveProps(nextProps) {
  }

  render() {
    const { user } = this.props;
    return (
      <div className="col col-12">
        <User user={user} />
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

export default connect(
  mapStateToProps
)(UserPage);