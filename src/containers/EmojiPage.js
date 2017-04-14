import React, { Component, PropTypes } from 'react';
import * as actionTypes from './../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import User from './../components/User';
import Header from './../components/Header';

class EmojiPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { actions } = this.props;
    actions.fetchEmojiIfNeeded();
  }

  render() {
    const { emojis } = this.props;
    return (
      <div>
        <Header title="Back" />
        <div className="col col-12 p2">
         { emojis.data && this.renderEmojis() }
         { !emojis.data && <h1 className="center">Loading...</h1> }
        </div>
      </div>
    )
  }

  renderEmojis() {
    const { emojis } = this.props;
    return(
      <ul className="list-reset">
        { Object.keys(emojis.data).map((item, idx)=>{
          return(
            <li className="align-middle inline-block" key={idx}><span><img src={emojis.data[item]} className="align-middle p2" />{item}</span></li>
          )
        })}
      </ul>
    )
  }
}

function mapStateToProps(state, props) {
  const { emojis } = state;
  return {
    emojis
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators(actionTypes.default, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(EmojiPage);
