import * as actionTypes from '../actions';
import merge from 'lodash/merge';
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import user from './user.reducer.js';
import emojis from './emoji.reducer.js';

const rootReducer = combineReducers({
  user,
  emojis,
  routing: routeReducer
})


export default rootReducer
