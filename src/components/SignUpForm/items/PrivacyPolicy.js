/**
 * Privacy Policy agreement with hand made checkbox 
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, TouchableWithoutFeedback, Linking} from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import icoMoonConfig from '../lib/selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);


var styles = StyleSheet.create({
    box: {
	    flexDirection: 'row',
    },
    checkbox: {
	    backgroundColor: 'white',
	    width: 18,
	    height: 18,
	    borderColor: '#ccc',
	    borderWidth: 1,
	    borderRadius: 2,
	    alignItems: 'center',
	    justifyContent: 'center',
	    marginTop: 4,
	    marginRight: 10,
    },
    text: {
	    fontFamily: 'AzoSans-Regular',
	    color: 'rgb(136, 136, 136)',
	    fontSize: 12,
	    flex: 1
    },
    link: {
	    textDecorationLine: 'underline',
    }
    
});

export default (props) => <View style={[styles.box, props.style]} >
	<TouchableOpacity style={styles.checkbox} onPress={props.onClick}>
		{props.isChecked && <Icon style={{color: 'black', padding: 0}} name='tick' size={18} />}
	</TouchableOpacity>	
	<Text style={[styles.text, props.txtStyle]} 
		numberOfLines={props.numberOfLines}>
		{props.children}
		<TouchableWithoutFeedback onPress={()=>Linking.openURL('https://corporate.discovery.com/privacy-policy/')}>
			<Text style={styles.link}>Privacy Policy</Text>
		</TouchableWithoutFeedback>
	</Text>
</View>
