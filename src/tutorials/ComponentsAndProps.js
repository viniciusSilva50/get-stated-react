import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Comment from '../components/Comment';

const user = {
    name: 'Vinicius',
    avatarUrl: 'https://www.tm-town.com/assets/default_male300x300-aae6ae0235b6cd78cee8df7ae19f6085.png'
};
const text = 'Hello React';

const date = new Date().toLocaleTimeString();

const comment = <Comment
    user={user}
    text={text}
    date={date}
/>;

ReactDOM.render(
    comment ,
    document.getElementById('root')
);

