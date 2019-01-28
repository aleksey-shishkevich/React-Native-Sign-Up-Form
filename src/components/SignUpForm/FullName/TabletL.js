import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
const { ALMOST_DONE2, JOIN, FIRST_NAME, LAST_NAME, SIGN_UP} = require('../lib/strings').default;

export default (props) => <View style={{flexDirection: 'row'}}>
		<View style={{marginTop: 60}}>
			<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
		</View>
		<View style={{width: '70%', marginLeft: 20}}>
			<View style={{height: 60, alignSelf: 'flex-start'}}><GrayCopy numberOfLines={1}>{ALMOST_DONE2}</GrayCopy></View>
			<View style={{flexDirection: 'row'}}>
				<Input ref={props.firstname} value={props.value.firstname} style={{flex:0.5}} placeholder={FIRST_NAME}/>
		    	<View style={{width: 10}}/>
		    	<Input ref={props.lastname} value={props.value.lastname} style={{flex:0.5}} placeholder={LAST_NAME}/>
		    	<View style={{width: 20}}/>
		    	<Button style={{width: 120}} onPress={props.signUp}>{SIGN_UP}</Button>
			</View>
		</View>
	</View>