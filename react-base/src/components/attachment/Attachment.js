import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import PropTypes from "prop-types";

import {createMessage} from "../../actions/message";
import {attachFile, detachFile} from "../../actions/questionnaire";

import {isNotEmptyFileList} from "../../utils/collection-utils";

class Attachment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            attachmentDisplay: null
        };
        this.addFile = this.addFile.bind(this);
    }
    componentDidCatch(err, info) {
        this.props.actions.createMessage(err.message);
    }
    addFile(event) {
        event.preventDefault();
        const { attachmentMaxSize, actions } =  this.props;
        if (isNotEmptyFileList(event.target.files)) {
            const [file] = event.target.files;
            // File size validation
            const { name, size } = file;
            if(size > attachmentMaxSize) {
                actions.createMessage(`Attachment file ${name} size ${size} exceeds the maximum size ${attachmentMaxSize}`);
                return;
            }
            actions.attachFile(file);
            actions.createMessage(`Attachment file ${name} is attached to questionnaire`);
            this.setState(() => {
                return {
                    attachmentDisplay: name
                };
            });
        } else {
            actions.detachFile();
            actions.createMessage('Attachment file is detached from questionnaire');
            this.setState(() => {
                return {
                    attachmentDisplay: null
                };
            });
        }
    }
    render() {
        return (
            <div className="attachment">
                Attachment: {this.state.attachmentDisplay}
                <input type="file" onChange={this.addFile} />
            </div>
        );
    }
}

Attachment.propTypes = {
    attachmentMaxSize: PropTypes.number,
    actions: PropTypes.shape({
        attachFile: PropTypes.func,
        detachFile: PropTypes.func,
        createMessage: PropTypes.func
    })
};

export const mapStateToProps = state => {
    return {
        attachmentMaxSize: state.attachmentMaxSize
    };
};

export const mapDispatchToProps = dispatch => {
    return {
        actions: bindActionCreators(
            {
                attachFile,
                detachFile,
                createMessage
            },
            dispatch
        )
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Attachment);
