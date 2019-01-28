/**
 * Touchable view with press in/out effects
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  TouchableWithoutFeedback,
  ViewPropTypes,
  ScrollView
} from 'react-native';

export default class TouchableView extends Component {
    
    render() {
         let opacity_style = this.props.disabled ? {opacity:0.3} : {opacity:1};
         return(
                <TouchableWithoutFeedback 
                    disabled={this.props.disabled}
                    onPress={this.props.onPress}
                    onPressIn={()=>this.refs[`content`].setNativeProps({style:[this.props.style, this.props.styleOnPressIn]})} 
                    onPressOut={()=>this.refs[`content`].setNativeProps({style:[this.props.style, this.props.styleOnPressOut]})}
                    >
                <View ref='content' style={[this.props.style, opacity_style]}>
                    {this.props.children}
                </View>
                </TouchableWithoutFeedback>
        );
    }
    
    static propTypes = {
        onPress: PropTypes.func,
        style: ViewPropTypes.style,
        styleOnPressIn: ViewPropTypes.style,
        styleOnPressOut: ViewPropTypes.style,
        disabled: PropTypes.bool,
    };
    
    static defaultProps = {
        styleOnPressIn: {
          backgroundColor:'#f7f7f7',
        },
        styleOnPressOut: {
        },
        disabled: false,
    };
};