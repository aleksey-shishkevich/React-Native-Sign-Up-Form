/**
 * main reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */


const InitialState = require('./mainInitialState').default;
var Immutable = require('immutable');
const {Record, List, Map} = Immutable;

const ActionTypes = require('../../lib/constants').default;

const initialState = new InitialState;
export default function mainReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return initialState.mergeDeep(state);

  switch (action.type) {

	case ActionTypes.LOGOUT_SUCCESS: {
		return initialState
	}  
    
    case ActionTypes.CHECK_EMAIL_REQUEST:
        return state
        .set('isFetching', true)
    
    case ActionTypes.CHECK_EMAIL_FAILURE:
        return state
        .set('isFetching', false)

    case ActionTypes.CHECK_EMAIL_SUCCESS: {
	    return state
        .set('isFetching', false)
        .set('email', action.payload)
        .set('state', 'FULLNAME');	    
    }
    
    case ActionTypes.SIGN_UP_REQUEST:
        return state
        .set('isFetching', true)
    
    case ActionTypes.SIGN_UP_FAILURE:
        return state
        .set('isFetching', false)

    case ActionTypes.SIGN_UP_SUCCESS: {
	    return state
        .set('isFetching', false)
        .set('state', 'CONGRATULATIONS');	    
    }

  }  
  
  /**
   * ## Default
   */
  return state;
}
