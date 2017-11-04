import React from 'react';

export default class Welcome extends React.Component{


    /**
     * From a single line return this is a good way
     * @returns {XML}
     */
    render() {
        return <h1 title={this.props.title}>Oi {this.props.userName}  </h1>
    };

    /**
     * From a multiple lines this is a good way
     */
    /*
    render(){
        return (
            <div>
                <h1>Oi</h1>
            </div>
        )
    }
    * */
}