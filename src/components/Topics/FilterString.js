import React, { Component } from 'react';

class FilterString extends Component {
    constructor(props){
        super(props);

        this.state = {
            favoriteShows : ['Catfish', 'Regular Show', 'Spongebob Squarepants', 'Peppa Pig', 'The Master of None', 'DuckTales', 'Its Always Sunny in Philadelphia', 'The OA', 'Stranger Things', 'How to Get Away with Murder'],
            userInput : '',
            filteredShow : []
        }
    }
    
    handleChange(val){
        this.setState({userInput: val});
    }

    filterShows(){
        let filtered = this.state.favoriteShows.filter((val, i, arr) => this.state.favoriteShows[i].includes(this.state.userInput));
            this.state.filteredShow = filtered;
       
        this.setState({filtered: this.state.filteredShow})
    }

    render(){
        return(
            <div 
                className="puzzleBox filterStringPB">
                <h4>Filter String</h4>
                <span 
                    className="puzzleText">
                        Unfiltered:{JSON.stringify(this.state.favoriteShows, null, 10)}
                </span>
                <input 
                    className="inputLine"
                    onChange = {(e)=> {this.handleChange(e.target.value) }}>
                </input>
                <button 
                    className="confirmationButton"
                    onClick = { () => {this.filterShows(this.state.userInput)} }>
                        Filter
                </button>
                <span 
                    className="resultsBox filterStringRB">
                        Filtered:{JSON.stringify(this.state.filteredShow, null, 10)}
                </span>

           </div>     
        )
    }
}

export default FilterString;