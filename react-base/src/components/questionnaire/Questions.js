import React from "react";
import PropTypes from "prop-types";

import Question from "./Question";

import {isNotEmptyArray} from "../../utils/collection-utils";

function Questions(props) {
    const { questions, navQuestionId, onAnswer } = props;

    return isNotEmptyArray(questions) ? (
        <div className="questions">
            <div className="ui-corner-top ui-widget-header ui-tabs epa_question_set">
                <p>Question Set</p>
            </div>
            <div className="ui-tabs-panel ui-widget-content ui-corner-bottom epa_question_set_content">
                {questions.map(question => <Question key={question.questionId} question={question} navQuestionId={navQuestionId} onAnswer={onAnswer} />)}
            </div>
        </div>
    ) : null;
}

Questions.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.object),
    navQuestionId: PropTypes.string,
    onAnswer: PropTypes.func.isRequired
};

export default Questions;
