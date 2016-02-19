import React, { Component, PropTypes } from 'react';
import { fetchUserIfNeeded } from './../actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import User from './../components/User';
import Header from './../components/Header';

class UserPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch, username } = this.props;
    dispatch(fetchUserIfNeeded(username));
  }

  render() {
    const { user } = this.props;
    return (
      <div>
        <Header title="Back" />
        <div className="col col-12 p2">
          <User user={user} />
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

export default connect(
  mapStateToProps
)(UserPage);
