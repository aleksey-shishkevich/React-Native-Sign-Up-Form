/**
 * Shared Styles
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict'; 

import {
  StyleSheet,
}
from 'react-native';
import colors from './colors';
var lang = global.lang || 'en';
   
     
export default {
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    text: {
        fontSize: 24,
        lineHeight: 26,
        color: 'black',
    },
    semiboldText: {
	    fontWeight: '800'
    },
    smallGrayText: {
        color: colors.MD_GRAY, 
        fontSize: 14,
    },
    headerTitleStyle: {
        fontSize: 18,
        alignSelf: 'center',
        color: 'black',
        fontWeight: 600,
        textAlign: 'center',
    },
    borderTop: {
        borderTopWidth: 1,
        borderTopColor: colors.LT_GRAY,
    },
    borderBottom: {
        borderBottomWidth: 1,
        borderBottomColor: colors.LT_GRAY,
    }
}