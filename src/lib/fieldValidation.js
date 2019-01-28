/**
 * Field Validation library
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

/**
 * ## Imports
 * 
 * validate and underscore
 *
 */
import validate from 'validate.js';
import _ from 'underscore';

/**
 * ## Email validation setup
 * Used for validation of emails
 */
const emailConstraints = {
  from: {
    email: true
  }
};

/**
* ## username validation rule
* read the message.. ;)
*/
const usernamePattern =/^.*\S.*$/;
const usernameConstraints = {
  username: { 
    format: {
      pattern: usernamePattern,
      flags: 'i',
      message: "must have 6-40 numbers, letters or special characters"
    }
  }
};

/**
* ## password validation rule
* read the message... ;)
*/
const passwordPattern =  /^\S+$/;
const passwordConstraints = {
  password: {
    format: {
      pattern: passwordPattern,
      flags: "i",
      message: "have at least a number and a special character,"
          + " and between 6-12 in length"
    }
  }
};

const passwordAgainConstraints = {
  confirmPassword: {
    equality: "password"
  }
};

/**
 * ## Field Validation
 * @param {Object} state Redux state
 * @param {Object} action type & payload
 */
export default function fieldValidation(state, action) {
  var {field, value} = action.payload;
  
  switch(field) {
    /**
     * ### username validation
     * set the form field error 
     */
  case('username'):
    value = value.trim();
    let validUsername  =  value.length>0 ?  _.isUndefined(validate({username: value}, usernameConstraints)) : false;
    if (validUsername) {
      return state.setIn(['form', 'fields', 'usernameHasError'], false);
    } else {
      return state.setIn(['form', 'fields', 'usernameHasError'], true);
    }
    break;
    
    /**
     * ### email validation
     * set the form field error 
     */    
  case('email'):
    value = value.trim();
    let validEmail  = value.length>0 ? _.isUndefined(validate({from: value}, emailConstraints)) : false;
    if (validEmail) {
        return state.setIn(['form', 'fields', 'emailHasError'], false);
    } else {
      return state.setIn(['form', 'fields', 'emailHasError'], true);
    }
    break;
    
    /**
     * ### password validation
     * set the form field error 
     */    
  case('password'):
    value = value.trim();
    let validPassword =  value.length>0 ? _.isUndefined(validate({password: value}, passwordConstraints)) : false;
    if (validPassword) {
      return state.setIn(['form', 'fields', 'passwordHasError'], false);
    } else {
      return state.setIn(['form', 'fields', 'passwordHasError'], true);
    }
    break;
    
    /**
     * ### passwordAgain validation
     * set the form field error 
     */    
  case('passwordAgain'):
    var validPasswordAgain
      = _.isUndefined(validate({password: state.form.fields.password,
                                confirmPassword: value}, passwordAgainConstraints));
    if (validPasswordAgain) {
      return state.setIn(['form', 'fields', 'passwordAgainHasError'], false);
    } else {
      return  state.setIn(['form', 'fields', 'passwordAgainHasError'], true);
    }
    break;

    /**
     * ### showPassword
     * toggle the display of the password
     */    
  case('showPassword'):
    return state.setIn(['form', 'fields',
                                'showPassword'], value);
    break;
  }
  return state;

}
