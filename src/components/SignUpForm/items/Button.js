/**
 * Red button
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';


var styles = StyleSheet.create({
    button: {
	    backgroundColor: 'rgb(237,31,52)',	    
	    borderRadius: 5,
	    alignItems: 'center',
	    justifyContent: 'center',
	    height: 50,
    },
    text: {
	    color: 'white',
	    fontSize: 22,
	    fontFamily: 'AzoSans-Bold',
    }
});


export default (props) => <TouchableOpacity 
								style={[styles.button, props.style]}
								disabled={props.disabled}
								onPress={props.onPress}>								
	<Text style={[styles.text, props.txtStyle]}>    
		{props.children}
	</Text>
</TouchableOpacity>