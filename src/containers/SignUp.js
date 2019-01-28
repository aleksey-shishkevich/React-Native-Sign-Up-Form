/**
 * Container for "Sign Up" screen
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import mapDispatchToProps from  '../lib/mapDispatchToProps';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import css from "../lib/basicStyles";

import * as mainActions from '../reducers/main/mainActions';
import * as navigationActions from '../reducers/nav/navigationActions';
import * as overlayActions from '../reducers/overlay/overlayActions';

import { Map } from 'immutable';
import SignUpForm from '../components/SignUpForm';
import Icon from '../components/Icon';
import getCurrentRouteName from '../lib/getCurrentRouteName';
import autobind from 'autobind-decorator'
import log  from '../lib/log';

import React from 'react';
import { View, KeyboardAvoidingView } from 'react-native';
import Confirmation from './Confirmation';
const actions = {
	main: mainActions,
    navigation: navigationActions,
    overlay: overlayActions,
};

function mapStateToProps(state) {
  return {
      ...state
  };
}

const MESSAGE_HEIGHT  = 44

@autobind
class SignUp extends React.Component {
	static navigationOptions = ({ navigation }) => {
	    const { params = {} } = navigation.state;
	    return ({
		    title: 'Sign Up',
	        headerRight: <Icon 
	        	style={{color: 'black', padding: 15}} 
	        	onPress={params.handlePressRight ? params.handlePressRight : () => null} 
	        	name="application-settings" size={19} />,
	      });   
	  }
  
	constructor(props) {
		super(props);
	}
	  
	componentDidMount() { 
		this.props.navigation.setParams({
			handlePressRight: ()=>this.props.actions.navigation.navigateTo('More', {}), 
		});
	}

  
    shouldComponentUpdate(nextProps, nextState) {
	    let nextRouteName = getCurrentRouteName(nextProps.nav).routeName;
        return nextRouteName == "SignUp";
    } 

	message(msg) {
		this.props.actions.overlay.setConfirmationMessage(msg)
	}
	
	checkEmail(email) {
		this.props.actions.main.checkEmail(email)
	}
	
	signUp(firstname, lastname) {
		this.props.actions.main.signUp(this.props.main.email, firstname, lastname)
	}

  
	render() {
		return(
			<KeyboardAvoidingView behavior="padding" enabled style={[css.container, {alignItems: 'center', justifyContent: 'center'}]}>
				<View style={{width: '100%', overflow: 'visible', paddingBottom: 44}}>
					<Confirmation start={0} end={MESSAGE_HEIGHT}/>
					<SignUpForm
						isFetching={this.props.main.isFetching}
						state={this.props.main.state}
						message={this.message}
						checkEmail={this.checkEmail}
						signUp={this.signUp}/>
				
				</View>
			</KeyboardAvoidingView>
		);
	}
};

export default connect(mapStateToProps, mapDispatchToProps(actions))(SignUp);
