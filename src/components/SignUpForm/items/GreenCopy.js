/**
 * Green copy
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    text: {
	    color: 'rgb(182, 253, 191)',
	    fontFamily: 'ElaineD02-Regular'
    }
});


export default (props) => <Text style={[styles.text, props.style]} numberOfLines={1}>
	{props.children}	
</Text>