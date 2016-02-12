import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { loadUser, loadStarred } from '../actions'
import Repo from '../components/Repo'
import List from '../components/List'
import zip from 'lodash/zip';
import { Link } from 'react-router';

function loadData(props) {
  const { login } = props
  props.loadUser(login, [ 'name' ])
}

class UserPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    loadData(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.login !== this.props.login) {
      loadData(nextProps)
    }
  }

  render() {
    console.log(this.props)
    const { user, login } = this.props
    
    return (
      <div>
        <div className="container clearfix">
            <div className="mx-auto py4" style={{ maxWidth: '32rem' }}>
              {!user && 
                <h1><i>Loading {login}’s profile...</i></h1>
              }
              {user && 
                <div className="center">
                  <img src={ user.avatarUrl } alt={ user.username } className="circle" style={{ 'width' : 80 }} />
                  <h1>{user.name}</h1>
                  <p style={{ 'wordBreak': 'break-all' }}>{ JSON.stringify(user) }</p>
                </div>
              }
            </div>
          </div> 
      </div>
    )
  }
}

UserPage.propTypes = {
  login: PropTypes.string.isRequired,
  loadUser: PropTypes.func.isRequired,
}

function mapStateToProps(state, props) {
  const { login } = props.params
  const {
    entities: { users, repos }
  } = state

  return {
    login,
    user: users[login]
  }
}

export default connect(mapStateToProps, {
  loadUser,
  loadStarred
})(UserPage)