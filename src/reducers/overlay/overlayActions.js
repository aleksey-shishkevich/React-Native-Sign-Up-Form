/**
 * overlay actions
 *
 * @author Aleksey Shishkevich <aleksey.shishkevichv@wgsn.com>
 */

const ActionTypes = require('../../lib/constants').default;

export function setConfirmationMessage(data){
    return {
        type: ActionTypes.SET_CONFIRMATION_MESSAGE,
        payload: data
  };
}
