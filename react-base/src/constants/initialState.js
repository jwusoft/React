/**
 * Initial state for the Redux store
 * @type {object}
 */
export default {
    status: 'complete',
    message: 'Welcome',
    error: null,
    credential: {
        clientName: null,
        accessToken: null
    },
    endpoint: null,
    attachmentMaxSize: 0,
    questionIds: [],
    questionnaire: {
        questionnaireId: 'A',
        title: 'Test',
        description: 'Test',
        questions: [
            {
                questionId: '1',
                sequenceNumber: '1',
                questionText: 'Select Question',
                questionType: {
                    select: {
                        selectMultiple: false,
                        choices: [
                            {
                                choiceId: 'QS1CH1',
                                sequenceNumber: '1',
                                choiceText: 'Yes'
                            },
                            {
                                choiceId: 'QS1CH2',
                                sequenceNumber: '2',
                                choiceText: 'No'
                            }
                        ],
                        answer: null
                    },
                    date: {},
                    numeric: {},
                    freeText: {}
                }
            },
            {
                questionId: '2',
                sequenceNumber: '2',
                questionText: 'Date Question',
                questionType: {
                    select: {},
                    date: {
                        isDateTimeRequired: true,
                        answer: null
                    },
                    numeric: {},
                    freeText: {}
                }
            },
            {
                questionId: '3',
                sequenceNumber: '3',
                questionText: 'Numeric Question',
                questionType: {
                    select: {},
                    date: {},
                    numeric: {
                        isNumeric: true,
                        answer: null
                    },
                    freeText: {}
                }
            },
            {
                questionId: '4',
                sequenceNumber: '4',
                questionText: 'Free Text Question',
                questionType: {
                    select: {},
                    date: {},
                    numeric: {},
                    freeText: {
                        isFreeText: true,
                        answer: null
                    }
                }
            }
        ],
        attachment: null
    }
};
