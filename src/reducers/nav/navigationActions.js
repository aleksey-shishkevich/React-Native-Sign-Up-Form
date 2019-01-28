/**
 * navigation actions
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

import { NavigationActions } from 'react-navigation';
import { InteractionManager } from 'react-native';
import getCurrentRouteName from "../../lib/getCurrentRouteName";
import log from '../../lib/log';
const ActionTypes = require('../../lib/constants').default;

var isNavigation = false;

export function navigateTo(routeName, params={}, key){
    return dispatch => {
        dispatch(NavigationActions.navigate({ routeName, params, key }));
    }
}

export function back(key=null){
	if (!isNavigation) {
		isNavigation = true;
		setTimeout(()=>{
			isNavigation = false;
		}, 400);
		return dispatch => {
			if (key) {
			    dispatch(NavigationActions.back({key}))
			} else {
				dispatch(NavigationActions.back());
			}
	    }
	} 
}

export function androidBackPress(){
	if (!isNavigation) {
		isNavigation = true;
		setTimeout(()=>{
			isNavigation = false;
		}, 400);
		return dispatch => {
	        dispatch(NavigationActions.back());
	    }
	} 
}

