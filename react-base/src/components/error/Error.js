import React from "react";
import {connect} from "react-redux";

/**
 * Renders an error message, if any
 * @method ErrorMessage
 * @param  {object}     props
 * @param  {object}     props.error
 */
const ErrorMessage = ({ error }) => {
    return (
        <div>
            <h2>Something went wrong</h2>
            <p>We're on it!</p>
            <pre>{error.toString()}</pre>
            <code>{error.stack || error.stacktrace || 'no error stack available'}</code>
        </div>
    );
};

export const mapStateToProps = state => {
    return {
        error: state.error
    };
};

export default connect(mapStateToProps)(ErrorMessage);
