/**
 * Text+Vector Icon button for the app header
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import { Text, View } from 'react-native';
import Icon from './Icon';
import TouchableView from './TouchableView';
import css from  '../lib/basicStyles';


export default (props) => (
	<TouchableView style={[{display: 'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', padding: 10}, props.style]}  onPress={props.onPress}>
		{props.text && <Text style={[css.text, css.semiboldText, {alignSelf: 'center', marginBottom: -2}]}>{props.text}</Text>}
		{props.text && props.icon && <View style={{marginRight: 10}}></View>}
		{props.icon && <Icon style={{color: 'black', padding: 0, alignSelf: 'center'}} name={props.icon} size={24} />}
	</TouchableView>
)
