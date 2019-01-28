/**
 * Store Configuration
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 

import {createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import navigationInitialState from '../reducers/nav/navigationInitialState';
import reducer from '../reducers';

/**
 * ## creatStoreWithMiddleware
 * Like the name...
 */ 
const logger = createLogger();
const createStoreWithMiddleware = applyMiddleware(
  thunk, 
  logger
)(createStore);

/**
 * ## configureStore
 * @param {Object} the state with for keys:
 * device, global, auth, profile
 * 
 */ 

function getInitialState() {
  const _initState = {
    nav: navigationInitialState,
  };
  return _initState;
};

function configureStore(initialState) {
  return createStoreWithMiddleware(reducer, initialState);
};

const store = configureStore(getInitialState());

export { store };