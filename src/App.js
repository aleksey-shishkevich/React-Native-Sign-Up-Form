/**
 * Root container 
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
 
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppWithNavigationState from './navigators/AppNavigator';
import Overlay from './containers/Overlay';
import Confirmation from './containers/Confirmation';
import { store } from './lib/configureStore';
import {
  View,
}
from 'react-native';

export default class DiscoveryAssessment extends React.Component {
    constructor(props) {
        super(props);
    }

	render() {
		return (
			<Provider store={store}>
				<View style={{backgroundColor:'white', flex:1}}>
					<AppWithNavigationState/>
					<Overlay/>
				</View>
			</Provider>
		);
	}    
}