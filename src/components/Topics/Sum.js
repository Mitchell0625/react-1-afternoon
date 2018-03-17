import React, { Component } from 'react';

class Sum extends Component {
    constructor(props){
        super(props)

        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleChange(val){
        this.setState({number1: val});
    }

    handleChange2(val){
        this.setState({number2: val});
    }

    adding(){
        this.state.sum = parseInt(this.state.number1) + parseInt(this.state.number2);
        this.setState({sum: this.state.sum});
    }
    render() {
        return (
            <div
                className="puzzleBox sumPB">
                <h4>Sum</h4>
                <input
                    className="inputLine"
                    onChange= {(e) => {this.handleChange(e.target.value)}}>
                    </input>
                <input
                    className="inputLine"
                    onChange = {(e) => {this.handleChange2(e.target.value)}}></input>
                <button 
                    className="confirmationButton"
                    onClick = {() => {this.adding(this.state.sum)}}>
                        Add
                    </button>
                <span
                    className="resultsBox">Sum: {JSON.stringify(this.state.sum, 10)}</span>
            </div>
        )
    }
}

export default Sum