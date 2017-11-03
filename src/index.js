import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();






/*
* First parameter is the element/module to render
* Second parameter is the element to receive the First parameter
* */
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
