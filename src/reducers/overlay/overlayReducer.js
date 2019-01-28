/**
 * overlay reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 
 
const InitialState = require('./overlayInitialState').default;

const {
    SHOW_OVERLAY,
    HIDE_OVERLAY,
    LOGOUT_SUCCESS, 
    SET_CONFIRMATION_MESSAGE
} = require('../../lib/constants').default;

const initialState = new InitialState;

export default function overlayReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);
  switch (action.type) {
	 case LOGOUT_SUCCESS: 
	 	return initialState; 

	case SET_CONFIRMATION_MESSAGE: {
        return state.set('confirmation', action.payload);
    }

	case SHOW_OVERLAY: {
        return state.set('showOverlay', action.payload);
    }

	case HIDE_OVERLAY: {
        return state.set('showOverlay', 0);
    }      
  }
  /**
   * ## Default
   */
  return state;
}
