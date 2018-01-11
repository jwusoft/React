import * as API from "../shared/http";
import * as types from "../constants/types";
import {createMessage} from "./message";

/**
 * Save questionnaire
 * @method saveQuestionnaire

 * @param  {object}    questionAnswers Question answers
 * @return {Function}
 */
export function saveQuestionnaire(questionAnswers) {
    return (dispatch, getState) => {
        dispatch(createQuestionnaireSave(questionAnswers));
        const { endpoint, credential, questionnaire } = getState();
        return API.saveQuestionnaire(endpoint, credential, questionnaire)
            .then(res => res.json())
            .then(result => {
                dispatch(createMessage(result.status.message));
            })
            .catch(err => dispatch(createMessage(err.message)));
    };
}

/**
 * Submit questionnaire
 * @method submitQuestionnaire

 * @param  {object}    questionAnswers Question answers
 * @return {Function}
 */
export function submitQuestionnaire(questionAnswers) {
    return (dispatch, getState) => {
        dispatch(createQuestionnaireSubmit(questionAnswers));
        const { endpoint, credential, questionnaire } = getState();
        return API.submitQuestionnaire(endpoint, credential, questionnaire)
            .then(res => res.json())
            .then(result => {
                dispatch(createMessage(result.status.message));
            })
            .catch(err => dispatch(createMessage(err.message)));
    };
}

/**
 * Create questionnaire save action
 * @method createQuestionnaireSave

 * @param  {object}    questionAnswers Question answers
 * @return {object}
 */
export function createQuestionnaireSave(questionAnswers) {
    return {
        type: types.QUESTIONNAIRE_ACTION.SAVE,
        questionAnswers
    };
}

/**
 * Create questionnaire submit action
 * @method createQuestionnaireSubmit

 * @param  {object}    questionAnswers Question answers
 * @return {object}
 */
export function createQuestionnaireSubmit(questionAnswers) {
    return {
        type: types.QUESTIONNAIRE_ACTION.SUBMIT,
        questionAnswers
    };
}

/**
 * Attach a file to questionnaire
 * @method attachFile

 * @param  {object}    file file uploaded
 * @return {Function}
 */
export function attachFile(file) {
    return dispatch => {
        const fileReader = new FileReader();
        fileReader.onload = function () {
            dispatch(createFileAttach(fileReader.result));
        };
        fileReader.onerror = function (error) {
            dispatch(createMessage(error.message));
        };
        fileReader.readAsDataURL(file);
    };
}

/**
 * Detach a file from questionnaire
 * @method detachFile

 * @return {Function}
 */
export function detachFile() {
    return dispatch => {
        dispatch(createFileDetach());
    };
}

/**
 * Create file attach action
 * @method createFileAttach

 * @param  {string}    base64File Base64 encoded attachment file
 * @return {object}
 */
export function createFileAttach(base64File) {
    return {
        type: types.QUESTIONNAIRE_ACTION.ATTACH,
        base64File
    };
}

/**
 * Create file detach action
 * @method createFileDetach

 * @return {object}
 */
export function createFileDetach() {
    return {
        type: types.QUESTIONNAIRE_ACTION.DETACH
    };
}

