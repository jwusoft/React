import React, {Component} from "react";
import PropTypes from "prop-types";

class FreeTextQuestion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.freeText ? props.freeText.answer : null
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { questionId, onAnswer } = this.props;
        const val = event.target.value;
        this.setState(() => {
            return {
                value: val
            };
        });
        onAnswer(questionId, val);
    }
    render() {
        const { freeText } = this.props;
        return freeText ? (
            <div className="question">
                <textarea rows="5" cols="50" value={this.state.value} onChange={this.handleChange} />
            </div>
        ) : null;
    }
}

FreeTextQuestion.propTypes = {
    freeText: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default FreeTextQuestion;
