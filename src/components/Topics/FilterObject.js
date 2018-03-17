import React, { Component} from 'react';

class FilterObject extends Component{
    constructor(props){
        super(props);

        this.state = {
            festivals: [
                {
                  name: 'Tomorrowland',
                  country: 'Belgium',
                  soldout: true
                },
                {
                  name: 'Electric Forest',
                  country: 'USA',
                  soldout: false
                },
                {
                  name: 'Creamfields',
                  year: 2018,
                  soldout: false
                },
                {
                    name: 'EDC Vegas',
                    country: 'USA',
                    price: 395
                }
              ],
            userInput: '',
            filteredFestivals: []
        }
    }
    handleChange(val){
        this.setState({ userInput: val});
    }

    filterFestivals(){
        let filtered = this.state.festivals.filter((val, i, arr) => this.state.festivals[i].hasOwnProperty(this.state.userInput));
        this.state.filteredFestivals = filtered;
        this.setState({filtered: this.state.filteredFestivals})

    }
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>
                <span 
                    className="puzzleText">
                        Original:{JSON.stringify(this.state.festivals, null, 10)}
                </span>
                <input  
                    className= "inputLine" 
                    onChange= { (e) => this.handleChange(e.target.value)}>
                </input>
                <button 
                    className="confirmationButton" 
                    onClick = { () => {this.filterFestivals(this.state.userInput)} }>
                        Filter
                </button>
                <span 
                    className="resultsBox filterObjectRB">
                        Filtered:{JSON.stringify(this.state.filteredFestivals, null, 10)}
                </span>
            </div>
        )
    }
}

export default FilterObject;