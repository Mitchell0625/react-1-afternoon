import React, { Component } from 'react';

class Palindrome extends Component {
    constructor(props){
        super(props);

        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(val){
        this.setState({userInput: val})
    }

    checkPalindrome(){
        let tester = this.state.userInput.split('').reverse().join('');

        if(tester === this.state.userInput){
            this.state.palindrome = true;
        } else {
            this.state.palindrome = false;
        }
        this.setState({palindrome: this.state.palindrome});
    }
    render(){
        return (
            <div
                className="puzzleBox filterStringPB">
                <h4>Palindrome</h4>
                <input
                    className="inputLine"
                    onChange = {(e) => {this.handleChange(e.target.value)}}>
                </input>
                <button
                    className="confirmationButton"
                    onClick = {() => {this.checkPalindrome(this.state.userInput)}}>

                </button>
                <span className="resultsBox">Palindrome: {JSON.stringify(this.state.palindrome,null, 10)}</span>
            </div>
        )
    }
}

export default Palindrome;