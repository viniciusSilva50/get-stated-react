import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Welcome from './components/Welcome';

const welcome = <Welcome/>;

const welcomeWithName = <Welcome
                            userName=", Vinicius"
                            title="Vinicius"
                        />;

ReactDOM.render(
    welcomeWithName ,
    document.getElementById('root')
);
