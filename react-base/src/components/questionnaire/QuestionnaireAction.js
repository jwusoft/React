import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import * as types from "../../constants/types";
import {saveQuestionnaire, submitQuestionnaire} from "../../actions/questionnaire";

class QuestionnaireAction extends Component {
    constructor(props) {
        super(props);
        this.handleClickSave = this.handleClickSave.bind(this);
        this.handleClickSubmit = this.handleClickSubmit.bind(this);
    }
    handleClickSave(event) {
        event.preventDefault();
        const { questionAnswers } = this.props;
        this.props.actions.saveQuestionnaire(questionAnswers);
    }
    handleClickSubmit(event) {
        event.preventDefault();
        const { questionAnswers } = this.props;
        this.props.actions.submitQuestionnaire(questionAnswers);
    }
    render() {
        const { status } = this.props;
        const submit = status === types.STATUS.COMPLETE ?  <button onClick={this.handleClickSubmit} className="btn btn-primary epa_form_button">Submit</button> : null;
        return (
            <div className="questionnaire-action">
                <button onClick={this.handleClickSave} className="btn btn-primary epa_form_button">Save</button>
                {submit}
            </div>
        );
    }
}

QuestionnaireAction.propTypes = {
    questionAnswers: PropTypes.object,
    status: PropTypes.string,
    actions: PropTypes.shape({
        saveQuestionnaire: PropTypes.func,
        submitQuestionnaire: PropTypes.func
    })
};

const mapStateToProps = state => {
    return {
        status: state.status
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                saveQuestionnaire,
                submitQuestionnaire
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionnaireAction);