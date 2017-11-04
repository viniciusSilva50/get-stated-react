import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './components/Clock';

let clock = <Clock/>


ReactDOM.render(
    clock ,
    document.getElementById('root')
);

