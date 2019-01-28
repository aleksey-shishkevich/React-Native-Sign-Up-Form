/**
 * Container for Cofirmation Alert
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

import { connect } from 'react-redux';
import mapDispatchToProps from  '../lib/mapDispatchToProps';
import React from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Animated, Keyboard } from 'react-native';
import css from "../lib/basicStyles";
import colors from "../lib/colors";
import autobind from 'autobind-decorator'
import * as overlayActions from '../reducers/overlay/overlayActions';
import log  from '../lib/log';


var styles = StyleSheet.create({
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: 'transparent',
	},
	box: {
		backgroundColor: colors.DK_RED,
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		left: 0,
		right: 0,
	},
	text:{
		textAlign:'center',
		color: 'white',
		fontSize: 14,
	},
});

function mapStateToProps(state) {
  return {
      overlay: state.overlay
  }
};

const actions = {
    overlay: overlayActions,
};


@autobind
class Confirmation extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
       bottom: new Animated.Value(props.end), 
    };
  }	

   componentWillReceiveProps(props) {
	 if (props.overlay.confirmation && !this.props.overlay.confirmation) {
	     Animated.sequence([
	        Animated.timing(          // Uses easing functions
	           this.state.bottom,    // The value to drive
	           {
		           toValue: props.start,
				   duration: 300,  
	           }            // Configuration
	         ),
	        Animated.timing(          // Uses easing functions
	           this.state.bottom,    // The value to drive
	           {
		           toValue:  props.end,
				   duration: 300,   
				   delay: 2000,
	           }            // Configuration
	        )
	     ]).start(()=>this.props.actions.overlay.setConfirmationMessage(null));	 
     }  
   } 
  	
    render() {
	    const height = Math.abs(this.props.end-this.props.start)
        if (this.props.overlay.confirmation) {
            return <TouchableWithoutFeedback onPress={()=>this.props.actions.overlay.setConfirmationMessage(null)}>
						<Animated.View style={[styles.box, {height, bottom: this.state.bottom}]}>
							<Text style={[css.text, styles.text]}>{this.props.overlay.confirmation}</Text>
						</Animated.View>
					</TouchableWithoutFeedback>;
        } 
        return null;
    }
};

export default connect(mapStateToProps, mapDispatchToProps(actions))(Confirmation);
