import initialState from "../constants/initialState";

/**
 * The endpoint reducer is responsible for update endpoint state
 * @method endpoint
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.endpoint] string
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function endpoint(state = initialState.endpoint, action) {
    switch (action.type) {
        default:
            return state;
    }
}
