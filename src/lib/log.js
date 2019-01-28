/**
 * console.log in debug mode
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */
'use strict';
export default function log(){
    if (process.env.NODE_ENV !== 'production') {
        console.log(...arguments);
    }
}