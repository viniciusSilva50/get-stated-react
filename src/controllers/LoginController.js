import React from 'react';
import LoginButton from '../components/LoginButton';
import LogoutButton from '../components/LogoutButton';

export default class LoginController extends React.Component {

    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    changeButton(){
        let button = null;

        if (this.state.isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}/>;
        } else {
            button = <LoginButton onClick={this.handleLoginClick}/>;
        }

        return button;
    }

    render() {
        let button = this.changeButton();
        return (
            <div>
                {button}
            </div>
        );
    }

}