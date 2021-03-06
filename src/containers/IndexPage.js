import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import Header from './../components/Header';

class IndexPage extends Component {
  render() {
    const { user } = this.props;
    return (
        <div>
          <Header title="Redux Boilerplate" />
          <div className="col col-12 p2">
              <p>My fav frontend peeps</p>
              <ul>
                <li><Link to="/clintonhalpin">Clinton Halpin</Link></li>
                <li><Link to="/iamnickvolpe">Nick Volpe</Link></li>
                <li><Link to="/chrisnager">Chris Nager</Link></li>
              </ul>
              <p>View all emojis on github</p>
              <ul>
                <li><Link to="/emoji">View all</Link></li>
              </ul>
              <p>Github flavored markdown</p>
              <ul>
                <li><Link to="/markdown">View POST Example</Link></li>
              </ul>
          </div>
        </div>
    )
  }
}

export default IndexPage;
