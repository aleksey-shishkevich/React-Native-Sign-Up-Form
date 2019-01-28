/**
 * Render for "More/Settings" screen
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 

import TouchableView from './TouchableView';
import colors from '../lib/colors';
import css from "../lib/basicStyles";
import Icon from './Icon';
import log  from '../lib/log'

import React, {Component} from 'react';
import {
  View,
  Text,
}
from 'react-native';


var DeviceInfo = require('react-native-device-info').default;

export default class More extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <View style={css.container}>
            	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
	                <Text style={css.text}>
	                	{'Version'}&nbsp;&nbsp;{DeviceInfo.getVersion()} ({DeviceInfo.getBuildNumber()})
	                </Text>
                </View>
            </View>
        );
    }
}