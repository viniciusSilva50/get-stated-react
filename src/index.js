import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mailbox from './components/Mailbox';

let messages = ['Oi', 'Tudo bem?'];
const mailbox = <Mailbox unreadMessages={messages}/>;

ReactDOM.render(
    mailbox,
    document.getElementById('root')
);

