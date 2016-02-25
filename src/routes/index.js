import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './../containers/App';
import IndexPage from './../containers/IndexPage';
import UserPage from './../containers/UserPage';
import EmojiPage from './../containers/EmojiPage';
import MarkdownPage from './../containers/MarkdownPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={IndexPage} />
  	<Route path="/emoji" component={EmojiPage} />
    <Route path="/markdown" component={MarkdownPage} />
    <Route path="/:username" component={UserPage} />
  </Route>
)
