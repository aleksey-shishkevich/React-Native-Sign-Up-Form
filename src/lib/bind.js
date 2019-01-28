/**
 * bind list of functions to _this
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';
export default function bind(_this, ...funcions) {	
	funcions.forEach(f => _this[f] = _this[f].bind(_this))
}