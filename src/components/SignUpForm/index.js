/**
 * "SignUpForm" component
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Keyboard
}
from 'react-native';

import autobind from 'autobind-decorator'


import Spinner from './items/Spinner';
import Email from './Email';
import FullName from './FullName';
import Congratulations from './Congratulations';

var styles = StyleSheet.create({
    block: {
		width: `100%`,
		padding: 20,
		backgroundColor: 'rgb(19,16,32)',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

var DeviceInfo = require('react-native-device-info').default;

@autobind
export default class SignUpForm extends Component {
    constructor(props) {
        super(props);
        let layout = 'PHONE'
        if (DeviceInfo.isTablet()) {
		    if (DeviceInfo.isLandscape()) {
			    layout = 'TABLETL'
		    } else {
			    layout = 'TABLETP'
		    }
	    } 
        this.state = { layout, privacy: false, email: '', firstname: '', lastname: '' };
    }
    
    checkEmail() {
	    Keyboard.dismiss()
	    if (!this.email.isEmailValid()) {
		    return this.props.message('Email address is not valid')
	    }
	    if (!this.state.privacy) {
		    return this.props.message('To continue you must agree to the Privacy Policy')
	    }
	    this.props.checkEmail(this.email.value())	    
    }

    signUp() {
	    Keyboard.dismiss()
	    const firstname = this.firstname.value()
	    const lastname = this.lastname.value()
	    if (firstname.length == 0) {
		    return this.props.message('First name is required')
	    }
	    if (lastname.length == 0) {
		    return this.props.message('Last name is required')
	    }
	    this.props.signUp(firstname, lastname)	    
    }

    
    togglePrivacyCheckBox() {
	    Keyboard.dismiss()
	    this.setState({privacy: !this.state.privacy})
    }
    
    onLayout(event) {
	    var {x, y, width, height} = event.nativeEvent.layout;
	    if (this.props.state == 'EMAIL') {
		    this.setState({minheight: height})
	    }
	    let layout = null
	    if (DeviceInfo.isTablet()) {
		    if (DeviceInfo.isLandscape()) {
			    layout = 'TABLETL'
		    } else {
			    layout = 'TABLETP'
		    }
	    } else {
		    layout = 'PHONE'
	    }
	    
	    if (this.state.layout != layout) {
		    let email = this.email ? this.email.value() : ''
		    let firstname = this.firstname ? this.firstname.value() : ''
		    let lastname = this.lastname ? this.lastname.value() : ''
		    this.setState({layout, email, firstname, lastname})
	    }
    }    

    
    renderForm() {
	    const {layout, privacy, email, firstname, lastname} = this.state
	    const formState = this.props.state
	    if (formState == 'EMAIL') {
			return <Email 	checkEmail={this.checkEmail} 
							togglePrivacyCheckBox={this.togglePrivacyCheckBox}
							privacy={privacy}
            		   		layout={layout} 
            		   		value={{email}}
					   		email={c=>this.email=c}/>	    
	    } else if (formState == 'FULLNAME') {
		    return <FullName signUp={this.signUp} 
            		   		layout={layout} 
            		   		value={{firstname, lastname}}
					   		firstname={c=>this.firstname=c}
					   		lastname={c=>this.lastname=c}/>
	    } else {
		    return <Congratulations layout={layout}/>
	    }
    }
    
    
    render() {
        return (
	        <TouchableWithoutFeedback onLayout={this.onLayout} onPress={Keyboard.dismiss} accessible={false}>
	            <View style={[styles.block, {minHeight: this.state.minheight}]}>
	            	{this.renderForm()}
					{this.props.isFetching && <Spinner/>}
	            </View>
            </TouchableWithoutFeedback>
        );
    }
}