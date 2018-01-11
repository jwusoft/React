import initialState from "../constants/initialState";

/**
 * The status reducer is responsible for update status state
 * @method status
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.status] string
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function status(state = initialState.status, action) {
    switch (action.type) {
        default:
            return state;
    }
}
