import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
import PrivacyPolicy from '../items/PrivacyPolicy'
const { SIGNUP, JOIN, NEXT, ENTER_EMAIL, POLICY2} = require('../lib/strings').default;

export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
	<GrayCopy numberOfLines={1}>{SIGNUP}</GrayCopy>
	<View style={{width: '70%', marginTop: 15}}>
	    <View style={{flexDirection: 'row'}}>
	    	<Input ref={props.email} value={props.value.email} style={{flex: 1}} placeholder={ENTER_EMAIL}/>
	    	<View style={{width: 20}}/>
			<Button style={{width: 120}} onPress={props.checkEmail}>{NEXT}</Button>
		</View>
		<PrivacyPolicy style={{marginTop: 15}} numberOfLines={2} isChecked={props.privacy} onClick={props.togglePrivacyCheckBox}>
			{POLICY2}
		</PrivacyPolicy>
	</View>	
</React.Fragment>