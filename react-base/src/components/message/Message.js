import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

/**
 * Displays message
 * @method Message
 * @param  {Function} props
 */
const Message = props => {
    const { message } = props;
    return (
        <span className="message">
            {message}
        </span>
    );
};

Message.propTypes = {
    message: PropTypes.string
};

const mapStateToProps = state => {
    return {
        message: state.message
    };
};

export default connect(mapStateToProps)(Message);
