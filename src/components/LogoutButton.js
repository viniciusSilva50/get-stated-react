import React from 'react';

export default class LogoutButton extends React.Component{x

    render(){
        return(
            <button onClick={this.props.onClick}>
                Logout
            </button>
        );
    };
}