import React from "react";
import CardList from "./cardList";
import { robots } from "./robots";
import SearchBox from "./searchbox";
import './app.css';

class App extends React.Component {

    // Defining the State
    constructor(){
        super()
        this.state = {
            robots: robots,
            searchfield: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value })          //updating the value of searchfield in the construvtor as soon as new thing is typed
    }
    render() {
        // Checks what is present inside the search field
        const filterSearch = this.state.robots.filter(robo => {
            return robo.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })          
        return (
            <div className="tc">
                <h1 className="f1">ROBOFRIENDS</h1>
                <SearchBox searchChange = {this.onSearchChange}/> 
                <CardList robots={filterSearch} />
            </div>        
        );
    }
}

export default App