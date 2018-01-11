import React, {Component} from "react";
import PropTypes from "prop-types";

import Choice from "./Choice";

import {isNotEmptyArray} from "../../utils/collection-utils";

class SingleChoice extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { questionId, onAnswer } = this.props;
        onAnswer(questionId, event.target.value);
    }
    render() {
        const { selectMultiple, choices, answer, questionId } = this.props;
        return isNotEmptyArray(choices) ? (
            <div className="choices" onChange={this.handleChange}>
                {choices.map(choice => {
                    const checked = choice.choiceId === answer;
                    return <Choice key={choice.choiceId} choice={choice} selectMultiple={selectMultiple} questionId={questionId} checked={checked} />
                })}
            </div>
        ) : null;
    }
}

SingleChoice.propTypes = {
    selectMultiple: PropTypes.bool,
    choices: PropTypes.arrayOf(PropTypes.object),
    answer: PropTypes.string,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default SingleChoice;
