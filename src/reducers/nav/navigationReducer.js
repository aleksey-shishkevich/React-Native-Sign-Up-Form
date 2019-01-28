/**
 * navigation reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
 'use strict';

import { NavigationActions } from 'react-navigation';

import { AppNavigator } from '../../navigators/AppNavigator';

const InitialState = require('./navigationInitialState').default;

function nav(state = InitialState, action) {
  let nextState;
  switch (action.type) {
    case 'LOGOUT_SUCCESS':
      nextState = AppNavigator.router.getStateForAction(
        NavigationActions.back({key:state.routes[1].key}),
        state
      );
      break;
    default:
      if (action && action.type && action.type.indexOf("Navigation") == 0) {
          nextState = AppNavigator.router.getStateForAction(action, state);
      }
      break;
  }

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
}

export default nav;