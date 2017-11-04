import React from 'react';

export default class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            date: new Date(),
            counter: 0,
            counterWithLongWrite: 0,
            name: 'Vinicius'
        };
    }

    componentDidMount(){
        /**
         * This below the lifecycle hooks from react
         * When the component is rendered for the fist time
         * The Mount is runs after the component output has ben
         * rendered to the DOM
         */

        this.timerID = setInterval(
            () => this.tick(),
            1000
        );

        this.counterID = setInterval(
            () => this.increase(),
            1000
        );

        this.counterWithLongWriteID = setInterval(
            () => this.incrieseLongWrite(),
            5000
        );

        this.fetchName().then(data => {
            this.setState({
                name: data
            });
        });
    }

    componentWillUnmount(){
        /**
         * This below the lifecycle hooks from react
         * When the component is removed
         */

        clearInterval(this.timerID);
        clearInterval(this.counterID);
        clearInterval(this.counterWithLongWriteID)
    }

    tick(){
        this.setState({
            date: new Date()
        });
    }

    increase(){
        this.setState((prevState, props) => ({
            counter: prevState.counter + 1
        }));
    }

    incrieseLongWrite(){
        this.setState(function(prevState, props){
            return {
                counterWithLongWrite: prevState.counterWithLongWrite + 1
            };
        });
    }

    fetchName(){
        return new Promise((resolve, reject) => {

            setInterval(() => {
                resolve("Vinicius da Silva");
            } , 5000);
        });
    }

    render(){
        return(
            <div>
                <div>
                    <hi>Hello, word</hi>
                    <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                </div>

                <div>
                    Counter made with arrow function = {this.state.counter}
                </div>

                <div>
                    Counter made with normal function = {this.state.counterWithLongWrite}
                </div>
                <div>
                    My name is {this.state.name}
                </div>
            </div>
        );
    };


}