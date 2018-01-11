import React from "react";
import PropTypes from "prop-types";

/**
 * Displays questionnaire header
 * @method QuestionnaireHeader
 * @param  {Function} props
 */
const QuestionnaireHeader = props => {
    const { questionnaire } = props;
    return (
            <div className="questionnaireHeader">
                <div className="ui-corner-top ui-widget-header ui-tabs epa_question_set question_title_section">
                     <div id={questionnaire.questionnaireId} className="ui-corner-top ui-widget-header ui-tabs epa_question_set question_title_section">
                        <p className="qs-title">{questionnaire.title}</p>
                    </div>
                </div>

                <div className="ui-tabs-panel ui-widget-content ui-corner-bottom epa_question_set_content question_title_section">
                    <div className="questionTitleWrapper">
                        <p className="qs-description">{questionnaire.description}</p>
                    </div>
                </div>
            </div>
    );
};

QuestionnaireHeader.propTypes = {
    questionnaire: PropTypes.object.isRequired
};

export default QuestionnaireHeader;
