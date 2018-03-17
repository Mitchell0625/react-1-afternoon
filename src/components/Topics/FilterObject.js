import React, { Component} from 'react';

class FilterObject extends Component{
    constructor(){
        super();

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
        this.setState({ userInput: val });
    }

    filterFestivals(){
        if(this.festivals.hasOwnProperty(this.userInput)){
            this.state.filteredFestivals.push(this.userInput);
        this.setState({this.state.filteredFestivals})
        }

    }
    render(){
        return (
            <div className="puzzleBox filterObjectPB">
            <h4>Filter Object</h4>
            <span className="puzzleText">Original:{JSON.stringify(this.state.festivals, null, 10)}</span>
            <input className= "inputLine" onChange= { (e) => this.handleChange(e.target.value)}></input>
            <button className="confirmationButton"> Filter</button>
            <span className="resultsBox filterObjectRB">Filtered:{JSON.stringify(this.state.filteredFestivals, null, 10)}</span>
            </div>
        )
    }
}

export default FilterObject;