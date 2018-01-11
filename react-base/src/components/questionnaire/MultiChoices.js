import React, {Component} from "react";
import PropTypes from "prop-types";

import Choice from "./Choice";

import {isNotEmptyArray} from "../../utils/collection-utils";

class MultiChoices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            values: props.answer ? props.answer.split(",") : []
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { questionId, onAnswer } = this.props;
        const { checked, value } = event.target;

        if (checked) {
            this.state.values.push(value);
        } else {
            this.state.values = this.state.values.filter(stateValue => stateValue !== value);
        }

        this.setState(() => {
            return {
                values: this.state.values
            };
        });

        onAnswer(questionId, this.state.values.join());
    }
    render() {
        const { selectMultiple, choices, questionId } = this.props;
        return isNotEmptyArray(choices) ? (
            <div className="choices" onChange={this.handleChange}>
                {choices.map(choice => {
                    const checked = isNotEmptyArray(this.state.values) && this.state.values.includes(choice.choiceId);
                    return <Choice key={choice.choiceId} choice={choice} selectMultiple={selectMultiple} questionId={questionId} checked={checked} />
                })}
            </div>
        ) : null;
    }
}

MultiChoices.propTypes = {
    selectMultiple: PropTypes.bool,
    choices: PropTypes.arrayOf(PropTypes.object),
    answer: PropTypes.string,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default MultiChoices;
