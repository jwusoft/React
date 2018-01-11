import React, {Component} from "react";
import PropTypes from "prop-types";

import SingleChoice from "./SingleChoice";
import MultiChoices from "./MultiChoices";

class SelectQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { questionId, onAnswer } = this.props;
        onAnswer(questionId, event.target.value);
    }
    render() {
        const { select, questionId, onAnswer } = this.props;
        let choices;
        if (select.selectMultiple) {
            choices = <MultiChoices choices={select.choices} selectMultiple={select.selectMultiple} answer={select.answer} questionId={questionId} onAnswer={onAnswer} />;
        } else {
            choices = <SingleChoice choices={select.choices} selectMultiple={select.selectMultiple} answer={select.answer} questionId={questionId} onAnswer={onAnswer} />;
        }
        return select ? (
            <div className="question">
                {choices}
            </div>
        ) : null;
    }
}

SelectQuestion.propTypes = {
    select: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default SelectQuestion;
