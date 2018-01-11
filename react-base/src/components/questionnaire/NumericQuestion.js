import React, {Component} from "react";
import PropTypes from "prop-types";

class NumericQuestion extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { questionId, onAnswer } = this.props;
        onAnswer(questionId, event.target.value);
    }
    render() {
        const { numeric } = this.props;
        return numeric ? (
            <div className="question">

            </div>
        ) : null;
    }
}

NumericQuestion.propTypes = {
    numeric: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default NumericQuestion;
