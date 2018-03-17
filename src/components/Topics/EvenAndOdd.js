import React, { Component } from 'react';

class EvenAndOdd extends Component {
    constructor (props){
        super(props);
        
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
        
    }
        
    handleChange(val) {
        this.setState({ userInput: val});
    }
       
    assignEvenAndOdds(userInput){
        var arr = userInput.split(',');
       
        for(var i = 0; i<arr.length; i++){
            if (arr[i] % 2 === 0) {
                this.state.evenArray.push(parseInt(arr[i]));
                this.setState({evenArray: this.state.evenArray});
            } else {
                this.state.oddArray.push(parseInt(arr[i]));
                this.setState({oddArray: this.state.oddArray});
             }  
        }
        
     }

        render() {
        return( 
            <div className='puzzleBox evenAndOddPB'>
            <h4>Evens and Odds</h4>
                <input className= 'inputLine' onChange = { (e) => this.handleChange(e.target.value)}></input>
                <button className = 'confirmationButton' onClick = { () => { this.assignEvenAndOdds (this.state.userInput) }}></button>
                <span className = 'resultsBox'>Evens: {JSON.stringify(this.state.evenArray)}</span>
                <span className = 'resultsBox'>Odds: {JSON.stringify(this.state.oddArray)}</span>
                
            </div>
        )
    }
    
}

export default EvenAndOdd;