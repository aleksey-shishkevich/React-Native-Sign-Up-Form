/**
 * Styled text input field. Email validation
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

var styles = StyleSheet.create({
    input: {
	    color: 'white',
	    backgroundColor: 'rgb(43,40,54)',
	    fontSize: 18,
	    height: 50,
	    textAlign: 'left',
	    fontFamily: 'AzoSans-Regular',
	    borderWidth: 0,
	    borderRadius: 5,
	    padding: 10
    }
});


export default class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = { text: props.value };
    }
    
    value() {
	    return this.state.text
    }
        
    isEmailValid() {
		let email = this.state.text
		let pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
		return pattern.test(String(email).toLowerCase())
	}

	render() {
        return (
	        <TextInput
	        	autoCapitalize={'none'}
	        	keyboardType={'email-address'}
        		placeholderTextColor={'rgb(84,94,108)'}
		        style={[styles.input, this.props.style]}
		        onChangeText={(text) => this.setState({text})}
		        value={this.state.text}
		        placeholder={this.props.placeholder}
		    />
	)}
}




