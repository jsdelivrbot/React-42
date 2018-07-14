import React from 'react';

class Message extends React.Component {
    preRender = (isUser) => {
        if(isUser) {
            return (
                <p className = 'user-message'>
                    {this.props.details.NEW_MESSAGE}
                </p>
            );
        } else {
            return (
                <p className = 'not-user-message'>
                    <strong>{this.props.details.PSEUDO}</strong> : {this.props.details.NEW_MESSAGE}
                </p>
            );
        };
    };
    
    render() {
        return(
            this.preRender(this.props.isUser(this.props.details.PSEUDO))
        );
    };

    static propTypes = {
        details: React.PropTypes.object.isRequired
    };
};

export default Message;