import {combineReducers} from "redux";

import {status} from "./status";
import {message} from "./message";
import {error} from "./error";
import {credential} from "./credential";
import {endpoint} from "./endpoint";
import {attachmentMaxSize, questionIds, questionnaire} from "./questionnaire";

/**
 * Root reducer for project
 * @module epa-portal/reducers
 */
const rootReducer = combineReducers({
    status,
    message,
    error,
    credential,
    endpoint,
    attachmentMaxSize,
    questionIds,
    questionnaire
});

export default rootReducer;
