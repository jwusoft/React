import React from "react";
import PropTypes from "prop-types";

import QuestionHeader from "./QuestionHeader";
import SelectQuestion from "./SelectQuestion";
import DateQuestion from "./DateQuestion";
import NumericQuestion from "./NumericQuestion";
import FreeTextQuestion from "./FreeTextQuestion";

/**
 * Displays a question
 * @method      Question
 * @param       {object} props
 * @constructor
 */
function Question(props) {
    const { question, navQuestionId, onAnswer } = props;

    return question ? (
        <div className="question" style={{display: navQuestionId===question.questionId ? 'inline' : 'none' }}>
            <QuestionHeader question={question} />
            {(() => {
                if (question.questionType.select) {
                    return <SelectQuestion select={question.questionType.select} questionId={question.questionId} onAnswer={onAnswer} />
                } else if (question.questionType.date) {
                    return <DateQuestion date={question.questionType.date} questionId={question.questionId} onAnswer={onAnswer} />
                } else if (question.questionType.numeric) {
                    return <NumericQuestion numeric={question.questionType.numeric} questionId={question.questionId} onAnswer={onAnswer} />
                } else if (question.questionType.freeText) {
                    return <FreeTextQuestion freeText={question.questionType.freeText} questionId={question.questionId} onAnswer={onAnswer} />
                }
            })()}
        </div>
    ) : null;
}

Question.propTypes = {
    question: PropTypes.object.isRequired,
    navQuestionId: PropTypes.string,
    onAnswer: PropTypes.func.isRequired
};

export default Question;
