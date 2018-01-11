import initialState from "../constants/initialState";
import * as types from "../constants/types";

/**
 * The questionnaire reducer controls the state of the actual questionnaire object.
 * @method questionnaire
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.questionnaire] object
 * @param  {object} action                     Redux action
 * @return {object}                            next state
 */
export function questionnaire(state = initialState.questionnaire, action) {
    switch (action.type) {
        case types.QUESTIONNAIRE_ACTION.SAVE: {
            let nextState = Object.assign({}, state);
            nextState.questions.map(question => {
                const answer = action.questionAnswers.get(question.questionId);
                let { select, date, numeric, freeText } = question.questionType;
                if (typeof(select) !== "undefined" && select !== null) {
                    select.answer = answer;
                } else if (typeof(date) !== "undefined" && date !== null) {
                    date.answer = answer;
                } else if (typeof(numeric) !== "undefined" && numeric !== null) {
                    numeric.answer = answer;
                } else if (typeof(freeText) !== "undefined" && freeText !== null) {
                    freeText.answer = answer;
                }
            });
            return nextState;
        }
        case types.QUESTIONNAIRE_ACTION.SUBMIT: {
            let nextState = Object.assign({}, state);
            nextState.questions.map(question => {
                const answer = action.questionAnswers.get(question.questionId);
                let { select, date, numeric, freeText } = question.questionType;
                if (typeof(select) !== "undefined" && select !== null) {
                    select.answer = answer;
                } else if (typeof(date) !== "undefined" && date !== null) {
                    date.answer = answer;
                } else if (typeof(numeric) !== "undefined" && numeric !== null) {
                    numeric.answer = answer;
                } else if (typeof(freeText) !== "undefined" && freeText !== null) {
                    freeText.answer = answer;
                }
            });
            return nextState;
        }
        case types.QUESTIONNAIRE_ACTION.ATTACH: {
            let nextState = Object.assign({}, state);
            nextState.attachment = action.base64File;
            return nextState;
        }
        case types.QUESTIONNAIRE_ACTION.DETACH: {
            let nextState = Object.assign({}, state);
            nextState.attachment = null;
            return nextState;
        }
        default:
            return state;
    }
}

/**
 * The questionIds reducer is responsible for update questionIds state
 * @method questionIds
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.questionIds] questionIds
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function questionIds(state = initialState.questionIds, action) {
    switch (action.type) {
        default:
            return state;
    }
}

/**
 * The attachmentMaxSize reducer is responsible for update attachmentMaxSize state
 * @method attachmentMaxSize
 * @module epa-portal/reducers

 * @param  {object} [state=initialState.attachmentMaxSize] attachmentMaxSize
 * @param  {object} action                    Redux action
 * @return {object}                           next state
 */
export function attachmentMaxSize(state = initialState.attachmentMaxSize, action) {
    switch (action.type) {
        default:
            return state;
    }
}
