import thunk from "redux-thunk";
import {applyMiddleware, compose, createStore} from "redux";
import {Base64} from "js-base64";
import orderBy from "../../node_modules/lodash/orderBy";

import rootReducer from "../reducers/root";
import {isNotEmptyArray} from "../utils/collection-utils";

let store;
export default initialState => {
    if (store) {
        return store;
    }

    // Initialize Redux store with credential
    const clientName = document.getElementById('clientName');
    initialState.credential.clientName = clientName.dataset.clientName;

    const accessToken = document.getElementById('accessToken');
    initialState.credential.accessToken = accessToken.dataset.accessToken;

    const endpoint = document.getElementById('endpoint');
    initialState.endpoint = endpoint.dataset.endpoint;

    const attachmentMaxSize = document.getElementById('attachmentMaxSize');
    initialState.attachmentMaxSize = parseInt(attachmentMaxSize.dataset.attachmentMaxSize);

    // Initialize Redux store with questionnaire data
    const questionnaire = document.getElementById('questionnaire');
    const encoded = questionnaire.dataset.questionnaire;
    if (encoded) {
        const decoded = Base64.decode(encoded);
        if (decoded) {
            try {
                initialState.questionnaire = JSON.parse(decoded);
                initialState.questionnaire.questions = orderBy(initialState.questionnaire.questions, 'sequenceNumber', 'asc');
                if (isNotEmptyArray(initialState.questionnaire.questions)) {
                    initialState.questionIds = initialState.questionnaire.questions.map(question => question.questionId);
                    initialState.questionnaire.questions.map(question => {
                        if(question.questionType.select && isNotEmptyArray(question.questionType.select.choices)) {
                            question.questionType.select.choices = orderBy(question.questionType.select.choices, 'sequenceNumber', 'asc');
                        }
                    });
                }
            } catch (e) {
                console.error('Unable to parse Questionnaire JSON data');
                console.error(e);
            }
        }
    }

    const createdStore = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunk),
            typeof window !== 'undefined' && window.devToolsExtension
                ? window.devToolsExtension()
                : f => f
        )
    );
    store = createdStore;
    return store;
};
