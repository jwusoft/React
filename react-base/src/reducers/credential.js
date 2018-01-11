import initialState from "../constants/initialState";

/**
 * The credential reducer is responsible for update credential state
 * @method credential
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.credential] object
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function credential(state = initialState.credential, action) {
    switch (action.type) {
        default:
            return state;
    }
}
