import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import Message from "../components/message/Message";
import QuestionnaireAction from "../components/questionnaire/QuestionnaireAction";
import QuestionnaireHeader from "../components/questionnaire/QuestionnaireHeader";
import Questions from "../components/questionnaire/Questions";
import Nav from "../components/navigation/Nav";
import Attachment from "../components/attachment/Attachment";
import {createError} from "../actions/error";

import {isNotEmptyArray} from "../utils/collection-utils";

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        const questionAnswers = new Map();
        const { questions } = props.questionnaire;
        questions.map(question => {
            const { select, date, numeric, freeText } = question.questionType;
            if (typeof(select) !== "undefined" && select !== null) {
                questionAnswers.set(question.questionId, select.answer);
            } else if (typeof(date) !== "undefined" && date !== null) {
                questionAnswers.set(question.questionId, date.answer);
            } else if (typeof(numeric) !== "undefined" && numeric !== null) {
                questionAnswers.set(question.questionId, numeric.answer);
            } else if (typeof(freeText) !== "undefined" && freeText !== null) {
                questionAnswers.set(question.questionId, freeText.answer);
            }
        });

        this.state = {
            navQuestionId: isNotEmptyArray(this.props.questionIds) ? this.props.questionIds[0] : null,
            questionAnswers: questionAnswers
        };
        this.navigate = this.navigate.bind(this);
        this.answer = this.answer.bind(this);
    }
    componentDidCatch(err, info) {
        this.props.actions.createError(err, info);
    }
    navigate(navQuestionId) {
        this.setState(prevState => {
            return {
                navQuestionId
            };
        });
    }
    answer(questionId, answer) {
        this.setState(prevState => {
            const questionAnswers = prevState.questionAnswers;
            questionAnswers.set(questionId, answer);
            return {
                questionAnswers
            };
        });
    }
    render() {
        return (
            <div>
                <div className="formWrapper">
                    <form id="epa_form" className="">
                        <div className="epa_form_content">
                            <div className="questionnaire">
                                <div className="questionnaireAction">
                                    <Message />
                                    <QuestionnaireAction questionAnswers={this.state.questionAnswers} />
                                </div>

                                <QuestionnaireHeader questionnaire={this.props.questionnaire} />
                                <Questions questions={this.props.questionnaire.questions} navQuestionId={this.state.navQuestionId} onAnswer={this.answer} />
                                <Nav onNavigate={this.navigate} questionIds={this.props.questionIds} navQuestionId={this.state.navQuestionId} />
                                <Attachment />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

Questionnaire.propTypes = {
    questionIds: PropTypes.array,
    questionnaire: PropTypes.object.isRequired,
    actions: PropTypes.shape({
        createError: PropTypes.func
    })
};

export const mapStateToProps = state => {
    return {
        questionIds: state.questionIds,
        questionnaire: state.questionnaire
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                createError
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Questionnaire);
