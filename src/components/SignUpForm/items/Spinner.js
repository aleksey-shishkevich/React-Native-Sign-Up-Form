/**
 * Native spinner
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 

import React from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    spinner: {
		...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgb(19,16,32)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default ()=> <View style={styles.spinner}>
    <ActivityIndicator
        animating={true}
        color={'white'}
        size="large"
    />
</View>

