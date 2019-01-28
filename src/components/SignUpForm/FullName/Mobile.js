import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GreenCopy from '../items/GreenCopy'
import GrayCopy from '../items/GrayCopy'
import Input from '../items/Input'
import Button from '../items/Button'
const { JOIN, ALMOST_DONE, FIRST_NAME, LAST_NAME, SIGN_UP} = require('../lib/strings').default;
import normalize from '../lib/normalize'


export default (props) => <React.Fragment>
	<GreenCopy style={{fontSize: normalize(40)}}>{JOIN}</GreenCopy>
	<GrayCopy numberOfLines={2}  style={{fontSize: normalize(18)}}>{ALMOST_DONE}</GrayCopy>
	<View style={{flexDirection: 'row'}}>
    	<Input ref={props.firstname} value={props.value.firstname}  style={{flex:0.5, marginTop: 15}} placeholder={FIRST_NAME}/>
    	<View style={{width: 10}}/>
    	<Input ref={props.lastname} value={props.value.lastname} style={{flex:0.5, marginTop: 15}} placeholder={LAST_NAME}/>
    </View>
	<Button style={{width: '100%', marginTop: 15}} onPress={props.signUp}>{SIGN_UP}</Button>
</React.Fragment>