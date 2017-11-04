import React from 'react';

export default class Toggle extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true,
            value: 0
        };

        this.increaseClick = this.increaseClick.bind(this);
        this.decreaseClick = this.decreaseClick.bind(this);
        this.resetClick = this.resetClick.bind(this);
    }

    decreaseClick(value) {
        console.log(value);

        this.setState((prevState) => ({
            value: --prevState.value
        }));
    }

    increaseClick(value) {
        console.log(value);

        this.setState((prevState) => ({
            value: ++prevState.value
        }));
    }

    resetClick(){
        this.setState((prevState) => ({
            value: 0
        }));
    }

    /**
     * Here are the examples to bind the click event
     * without params and with params
     * With parameters there are two ways, first example is made with arrow function
     * and the second is made with Function.prototype.bind
     * @returns {XML}
     */

    render() {
        return (
            <div>
                <div>
                    <button onClick={this.resetClick}>
                        Reset
                    </button>
                </div>
                <div>
                    <button onClick={() => this.decreaseClick(1)}>
                        {this.state.isToggleOn ? 'Decrease' : 'OFF'}
                    </button>
                </div>

                <div>
                    <button onClick={this.increaseClick.bind(2)}>
                        {this.state.isToggleOn ? 'Increase' : 'OFF'}
                    </button>
                </div>

                <div>
                    {this.state.value}
                </div>
            </div>
        );
    };
}