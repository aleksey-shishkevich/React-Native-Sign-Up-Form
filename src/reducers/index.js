/**
 * This class combines all the reducers into one
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';


import nav from './nav/navigationReducer';
import overlay from './overlay/overlayReducer';
import main from './main/mainReducer';

import { combineReducers } from 'redux';

/**
 * ## CombineReducers
 * 
 * the rootReducer will call each and every reducer with the state and action
 * EVERY TIME there is a basic action
 */ 
const rootReducer = combineReducers({
	nav,
	overlay,
	main
});

export default rootReducer;


