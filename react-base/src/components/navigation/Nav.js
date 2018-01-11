import React, {Component} from "react";
import PropTypes from "prop-types";

import {isNotEmptyArray} from "../../utils/collection-utils";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state ={
            showNav: isNotEmptyArray(this.props.questionIds)
        };
        this.handlePrev = this.handlePrev.bind(this);
        this.handleNext = this.handleNext.bind(this);
    }
    handlePrev(event) {
        event.preventDefault();
        const questionIds = this.props.questionIds;
        const navQuestionId = this.props.navQuestionId;
        const index = questionIds.indexOf(navQuestionId);
        const nextIndex = index-1;
        this.props.onNavigate(questionIds[nextIndex]);
    }
    handleNext(event) {
        event.preventDefault();
        const questionIds = this.props.questionIds;
        const navQuestionId = this.props.navQuestionId;
        const index = questionIds.indexOf(navQuestionId);
        const nextIndex = index+1;
        this.props.onNavigate(questionIds[nextIndex]);
    }
    render() {
        const questionIds = this.props.questionIds;
        const navQuestionId = this.props.navQuestionId;
        const index = questionIds.indexOf(navQuestionId);

        let showPrev, showNext;
        if (index === 0) {
            showPrev = false;
            showNext = true;
        } else if (index === (questionIds.length-1)) {
            showPrev = true;
            showNext = false;
        } else {
            showPrev = true;
            showNext = true;
        }

        const prev = showPrev ? <button onClick={this.handlePrev} className="btn btn-primary epa_form_button">Prev</button> : null;
        const next = showNext ? <button onClick={this.handleNext} className="btn btn-primary epa_form_button">Next</button> : null;

        return this.state.showNav ? (
            <div className="">
                {prev}
                {next}
            </div>
        ) : null;
    }
}

Nav.propTypes = {
    onNavigate: PropTypes.func.isRequired,
    questionIds: PropTypes.array,
    navQuestionId: PropTypes.string
};

export default Nav;


