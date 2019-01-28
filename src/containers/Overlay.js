/**
 * Container for Overlay
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

import { connect } from 'react-redux';

import React from 'react';
import {View} from 'react-native';
import Spinner from "../components/Spinner";
import log  from '../lib/log';

function mapStateToProps(state) {
  return {
      overlay: state.overlay
  }
};


class Overlay extends React.Component{
    render() {
        let backgroundColor = this.props.overlay.showOverlay == 1 ? 'transparent' : 'rgba(255,255,255,0.7)';
        if (this.props.overlay.showOverlay != 0) {
            return <View style={{
                backgroundColor,
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
            }}>
            <Spinner/>
            </View>;
        } 
        return null;
    }
};

export default connect(mapStateToProps)(Overlay);
