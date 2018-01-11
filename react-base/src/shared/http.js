import fetch from "isomorphic-fetch";
import uuid from "../../node_modules/uuid/v4";

/**
 * Generates a Fetch configuration object so we can share headers
 * @method generateFetchConfig
 * @param  {string}            method      HTTP verb
 * @param  {object}            [body=null] payload for post/put
 * @return {object}                        config
 */
function generateFetchConfig(method, body = null) {
    const upCasedMethod = method.toUpperCase();
    const config = {
        method: upCasedMethod,
        headers: {
            'Content-Type': 'application/json'
        }
    };
    if (['POST', 'PUT'].includes(upCasedMethod)) {
        config.body = JSON.stringify(body);
    }
    return config;
}

/**
 * Generates a shared request context body object
 * @method generateRequestContext

 * @param  {object}            credential payload for post
 * @return {object}                        request context body
 */
function generateRequestContext(credential) {
    return {
        requestInfo: {
            requestId : uuid(),
            requestTimestamp : new Date().toISOString()
        },
        accessContext : {
            clientName : credential.clientName,
            accessToken : credential.accessToken
        }
    };
}

/**
 * Save questionnaire progress with the given questionnaire
 * @method saveQuestionnaire

 * @param  {object}   endpoint API endpoint
 * @param  {object}   credential API credential
 * @param  {object}   questionnaire Questionnaire payload
 * @return {Response}           Fetch Response
 */
export function saveQuestionnaire(endpoint, credential, questionnaire) {
    const requestContext = generateRequestContext(credential);
    const body = {
        ...requestContext,
        epaCaseFormSaveRequestContext: questionnaire
    };
    return fetch(`${endpoint}/epa/case/form/save/v1`, generateFetchConfig('POST', body));
}

/**
 * Submit questionnaire with the given questionnaire
 * @method submitQuestionnaire

 * @param  {object}   endpoint API endpoint
 * @param  {object}   credential API credential
 * @param  {object}   questionnaire Questionnaire payload
 * @return {Response}           Fetch Response
 */
export function submitQuestionnaire(endpoint, credential, questionnaire) {
    const requestContext = generateRequestContext(credential);
    const body = {
        ...requestContext,
        epaCaseFormSubmitRequestContext: questionnaire
    };
    return fetch(`${endpoint}/epa/case/form/submit/v1`, generateFetchConfig('POST', body));
}