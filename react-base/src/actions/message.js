import * as types from "../constants/types";

/**
 * Create a message
 * @method createMessage

 * @param  {string}    message message description
 * @return {object}
 */
export function createMessage(message) {
    return {
        type: types.APP_ACTION.MESSAGE,
        message
    };
}
