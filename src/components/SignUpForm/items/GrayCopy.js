/**
 * Gray copy
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import {Text, StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    text: {
	    color: 'rgb(148,174,191)',
	    fontSize: 24,
	    textAlign: 'center',
	    fontFamily: 'AzoSans-Bold'
    }
});

export default (props) => <Text style={[styles.text, props.style]} 
							adjustsFontSizeToFit={true} 
							numberOfLines={props.numberOfLines} 
							minimumFontScale={.5} 
							allowFontScaling>
	{props.children}	
</Text>