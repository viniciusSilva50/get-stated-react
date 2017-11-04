import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user){
    return user.firstName + ' ' + user.secondName;
}

function getGreeting(user){
    if(user){
        return <h1 userAttribute={formatName(user)} title={formatName(user)}>Oi {formatName(user)}</h1>;
    }

    return <h1 title={newUser} >Olá novato</h1>;
}

const newUser = 'Novato';

let user = {
    firstName: 'Vinicius',
    secondName: 'Silva'
};

let element = (
    getGreeting(user)
);

/**
 * Above is a example of React elements
 */
let elementCreateStructure = React.createElement(
    'h1',
    {className: 'greeting'},
    'Hello, Word'
);

let elementStructure = {
    type: 'h1',
    props: {
        className: 'greeting',
        children: 'Hello, World'
    }
};
let auxObj = {};

/**
 * First parameter is the element/module to render
 * Second parameter is the element to receive the First parameter
 */

/**
 ReactDOM.render(
 elementCreateStructure,
 document.getElementById('root')
 );
 */

/**
 * If two elements is render in the
 * same element the last render override another's
 */
function tick() {
    let clockElement = (
        <div>
            {element}
            <h2>{new Date().toLocaleTimeString()}.</h2>
        </div>
    );

    ReactDOM.render(
        clockElement,
        document.getElementById('root')
    );
};

setInterval(tick, 1000);