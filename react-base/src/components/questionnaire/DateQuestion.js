import React, {Component} from "react";
import PropTypes from "prop-types";

import Datetime from "react-datetime";
import Moment from "moment";

import "../../../node_modules/react-datetime/css/react-datetime.css";

class DateQuestion extends Component {
    constructor(props) {
        super(props);
        const { date } = props;
        const ansMoment = date.answer ? Moment(date.answer) : null;
        this.state = {
            value: ansMoment ? ansMoment.local().toDate() : new Date()
        };
        this.renderInput = this.renderInput.bind(this);
        this.openDatetimePicker = this.openDatetimePicker.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    renderInput(props, openCalendar){
        return (
            <div>
                <input {...props} disabled={true} />
                <button onClick={e => this.openDatetimePicker(e, openCalendar)}>open calendar</button>
            </div>
        );
    }
    openDatetimePicker(event, openCalendar) {
        event.preventDefault();
        openCalendar.apply();
    }
    handleChange(moment) {
        const { questionId, onAnswer } = this.props;
        onAnswer(questionId, moment.utc().format());
        this.setState(() => {
            return {
                value: moment.local().toDate()
            };
        });
    }
    render() {
        const { date } = this.props;
        return date ? (
            <div className="question">
                <Datetime
                    value={this.state.value}
                    dateFormat="YYYY-MM-DD"
                    timeFormat="HH:mm:ss"
                    closeOnSelect={true}
                    onChange={this.handleChange}
                    renderInput={this.renderInput}
                />
            </div>
        ) : null;
    }
}

DateQuestion.propTypes = {
    date: PropTypes.object.isRequired,
    questionId: PropTypes.string.isRequired,
    onAnswer: PropTypes.func.isRequired
};

export default DateQuestion;
