import React from 'react';

export default class Mailbox extends React.Component {

    /**
     * This example show how to inline if with Logical && Operator
      * @returns {XML}
     */
    render(){
        let unreadMessages = this.props.unreadMessages || [];

        return (
            <div>
                <h1>Hello!</h1>
                {unreadMessages.length > 0 &&
                    <h2>
                        You have {unreadMessages.length} unreade messages.
                    </h2>
                }
            </div>
        );
    }

}