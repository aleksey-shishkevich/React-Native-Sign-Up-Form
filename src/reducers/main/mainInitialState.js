/**
 * Initial state for main reducer
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';

const {Record} = require('immutable');

var InitialState = new Record({
	isFetching: false,
	email: null,
	state: 'EMAIL',
	//state: 'FULLNAME',
});

export default InitialState;

