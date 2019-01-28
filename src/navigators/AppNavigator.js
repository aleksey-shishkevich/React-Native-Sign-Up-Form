/**
 * Navigation
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

import React from 'react';
import { Animated, Easing, Platform, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { StackNavigator, TabNavigator, NavigationActions } from 'react-navigation';
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers';

import SignUp from '../containers/SignUp';
import More from '../containers/More';
import css from "../lib/basicStyles";
import CardStackStyleInterpolator from 'react-navigation/src/views/StackView/StackViewStyleInterpolator';
//import StackViewStyleInterpolator from 'react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator'

const navigationOptions = {
    headerStyle: {
      height: 55,
    },
    headerTitle: ({children}) => (
      <View style={{flex: 1}}>
        <Text
          adjustsFontSizeToFit
          style={css.headerTitleStyle}>{children}</Text>
      </View>
    ),
    headerRight: <View/>,
    headerLeft: <View/>,
	gesturesEnabled: false,
}


const transitionConfig = () => ({
	screenInterpolator: CardStackStyleInterpolator.forHorizontal,
})



const MainScreen = StackNavigator({
    SignUp: { screen: SignUp },
    More: { screen: More },
}, 
{
    navigationOptions: {
	    gesturesEnabled: false,
	},
	transitionConfig
});


export const AppNavigator = StackNavigator({
	Main: { screen: MainScreen },
}, 
{
    navigationOptions: {
	    header: null, 
	    gesturesEnabled: false,
	},
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={{ dispatch, state: nav }} />
);



const middleware = createReactNavigationReduxMiddleware(
  "root",
   state => state.nav,
);

const App = reduxifyNavigator(AppNavigator, "root");


const mapStateToProps = state => ({
  state: state.nav,
});

export default connect(mapStateToProps)(App);
