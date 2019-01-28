/**
 * Native spinner
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 

import React, { Component} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import colors from '../lib/colors';

var styles = StyleSheet.create({
    spinner: {
		...StyleSheet.absoluteFillObject,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default class Spinner extends Component {
  render() {
    return (
            <View style={styles.spinner}>
                <ActivityIndicator
                    animating={true}
                    color={colors.DK_GRAY}
                    size="large"
                />
            </View>
    );
  }
};
