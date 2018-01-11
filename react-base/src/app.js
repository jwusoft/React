import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import ErrorMessage from "components/error/Error";

/**
 * The app component serves as a root for the project and renders children.
 * @method App
 * @module epa-portal/components
 */
class App extends Component {
    render() {
        if (this.props.error) {
            return (
                <div className="app">
                    <ErrorMessage error={this.props.error} />
                </div>
            );
        }
        return (
            <div>
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.node,
    error: PropTypes.object
};

export const mapStateToProps = state => {
    return {
        error: state.error
    };
};

export default connect(mapStateToProps)(App);
