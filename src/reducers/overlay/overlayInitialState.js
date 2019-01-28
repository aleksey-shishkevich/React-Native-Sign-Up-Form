/**
 * initial state for overlay reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
 'use strict'; 
 
const {Record} = require('immutable');

/**
 * ## InitialState
 */
var InitialState = Record({
  showOverlay: 0,
  confirmation: null
});

export default InitialState;

