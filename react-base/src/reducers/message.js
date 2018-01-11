import initialState from "../constants/initialState";
import * as types from "../constants/types";

/**
 * The message reducer is responsible for update message state
 * @method message
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.message] string
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function message(state = initialState.message, action) {
    switch (action.type) {
        case types.APP_ACTION.MESSAGE: {
            let nextState = Object.assign({}, state);
            nextState = action.message;
            return nextState;
        }
        default:
            return state;
    }
}
