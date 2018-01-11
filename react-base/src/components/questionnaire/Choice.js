import React from "react";
import PropTypes from "prop-types";

/**
 * Displays a choice
 * @method      Choice
 * @param       {object} props
 * @constructor
 */
function Choice(props) {
    const { selectMultiple, choice, questionId, checked } = props;
    const element = selectMultiple ? "checkbox" : "radio";
    return choice ? (
        <div className="choice">
            <label>
                <input type={element} name={questionId} value={choice.choiceId} defaultChecked={checked}/>{choice.choiceText}
            </label>
        </div>
    ) : null;
}

Choice.propTypes = {
    selectMultiple: PropTypes.bool,
    choice: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    checked: PropTypes.bool
};

export default Choice;
