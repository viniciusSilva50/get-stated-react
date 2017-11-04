import React from 'react';
import Welcome from "./Welcome";


export default class Greeting extends React.Component {

    render(){
       return (
            <div>
                <Welcome userName="Vinicius"/>
                <Welcome userName="Alex"/>
                <Welcome userName="Alexis"/>
            </div>
       );
    }

}
