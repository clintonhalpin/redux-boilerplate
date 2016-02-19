import React, { Component, PropTypes } from 'react';
import { fetchEmojiIfNeeded } from './../actions/';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import User from './../components/User';
import Header from './../components/Header';

class EmojiPage extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(fetchEmojiIfNeeded());
  }

  render() {
    const { emojis } = this.props;
    return (
      <div>
        <Header title="Back" />
        <div className="col col-12 p2">
         <h1 className="m0">All of the emojis available on Github</h1>
         { emojis && this.renderEmojis() }
        </div>
      </div>
    )
  }

  renderEmojis() {
    const { emojis } = this.props;
    return(
      <ul className="list-reset">
        { Object.keys(emojis).map((item, idx)=>{
          return(
            <li className="align-middle inline-block" key={idx}><span><img src={emojis[item]} className="align-middle p2" />{item}</span></li>
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

export default connect(
  mapStateToProps
)(EmojiPage);
