/**
 * Get current route name
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';


export default function getCurrentRouteName(navigationState) {
  if (!navigationState || !navigationState.routes) {
    return null;
  }
  const route = navigationState.routes[navigationState.index];
  // dive into nested navigators
  if (route.routes) {
    return getCurrentRouteName(route);
  }
  return route;
}
