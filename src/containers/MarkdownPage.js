import React, { Component, PropTypes } from 'react';
import * as actionTypes from './../actions/';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router';
import Header from './../components/Header';

class MarkdownPage extends Component {
  constructor(props) {
    super(props)
  }  
  render() {
    const { markdown } = this.props;
    return (
        <div>
          <Header title="Back" />
          <div>
            <div className="col col-6 p2">
                <h1 className="mt0">Markdown Preview</h1>
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <textarea className="field col-12" ref="markdown" style={{ 'height': 700 }}></textarea>
                  <button type="submit" className="btn bg-blue white">Submit</button>
                </form>
            </div>
            <div className="col col-6 p2">
                <pre>Preview:</pre>
                { markdown.isFetching && <h1 className="center">Loading Preview...</h1> }
                { markdown.data && <div className="markdown-body" dangerouslySetInnerHTML={{__html: markdown.data }} /> }
            </div>
          </div>
        </div>
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    const { actions } = this.props;
    actions.postMarkdown(this.refs.markdown.value);
  }
}

function mapStateToProps(state, props) {
  const { markdown } = state;
  return {
    markdown
  }
}

function mapDispatchToProps(dispatch, props) {
  return {
    actions: bindActionCreators(actionTypes.default, dispatch)
  }
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(MarkdownPage);
