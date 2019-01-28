/**
 * initial state for navigation reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/AppNavigator';

// Start with two routes: The Main screen, with the Login screen on top.
let initialNavState = AppNavigator.router.getStateForAction(
  NavigationActions.init()
);
initialNavState = AppNavigator.router.getStateForAction(
  initialNavState
);

export default initialNavState;
