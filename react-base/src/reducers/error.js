import initialState from "../constants/initialState";
import * as types from "../constants/types";

/**
 * The error reducer is responsible for update error state
 * @method error
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.error] object
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function error(state = initialState.error, action) {
    switch (action.type) {
        case types.APP_ACTION.ERROR:
            return action.error;
        default:
            return state;
    }
}
