import React from "react";
import PropTypes from "prop-types";

/**
 * Displays question header
 * @method QuestionHeader
 * @param  {Function} props
 */
const QuestionHeader = props => {
    const { question } = props;
    return (
        <div className="questionHeader">
            <label htmlFor="questionquestionId">
                <p> </p>
                <div id={question.questionId + '_' + question.sequenceNumber} className="epa_label">
                    <div className="clearBoth">
                        <div className="floatLeft">
                            <span className="questionTitleWrapper">{question.questionText}<span className="asterisk">*</span>
                            </span>
                        </div>
                    </div>
                </div> <p/>
            </label>
        </div>
    );
};

QuestionHeader.propTypes = {
    question: PropTypes.object.isRequired
};

export default QuestionHeader;
