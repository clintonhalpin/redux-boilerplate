import * as actionTypes from '../actions';
import merge from 'lodash/merge';
import { routeReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import user from './user.reducer.js';

const rootReducer = combineReducers({
  user,
  routing: routeReducer
})


export default rootReducer
