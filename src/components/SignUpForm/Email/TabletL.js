import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
import PrivacyPolicy from '../items/PrivacyPolicy'
const { SIGNUP, JOIN, NEXT, ENTER_EMAIL, POLICY2} = require('../lib/strings').default;

export default (props) => <View style={{flexDirection: 'row'}}>
		<View style={{marginTop: 60}}>
			<GreenCopy style={{fontSize: 55}}>{JOIN}</GreenCopy>
		</View>
		<View style={{width: '50%', marginLeft: 20, marginRight: 20}}>
			<View style={{height: 60, alignSelf: 'flex-start'}}><GrayCopy numberOfLines={1}>{SIGNUP}</GrayCopy></View>
			<Input ref={props.email} value={props.value.email}  placeholder={ENTER_EMAIL}/>
    		<PrivacyPolicy style={{marginTop: 15}} numberOfLines={2} isChecked={props.privacy} onClick={props.togglePrivacyCheckBox}>
					{POLICY2}
			</PrivacyPolicy>
		</View>
		<View style={{marginTop: 60}}>
			<Button style={{width: 120}} onPress={props.checkEmail}>{NEXT}</Button>
		</View>
	</View>
