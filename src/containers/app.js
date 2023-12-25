import React,  { useState, useEffect } from "react";
import CardList from "../components/cardList";
import Scroll from "../components/scroll"
import SearchBox from "../components/searchbox";
import './app.css';
import ErrorBoundry from "../components/ErrorBoundry";

function App () {
    const [robots, setRobots] = useState([]);
    const [searchfield, setSearchField] = useState('');

    const onSearchChange = (event) => {
        setSearchField(event.target.value)
    }

    useEffect(() => {
            fetch('https://jsonplaceholder.typicode.com/users')
                .then(response => response.json())
                .then(users => setRobots(users) )
    }, [])

    const filterSearch = robots.filter(robo => {
        return robo.name.toLowerCase().includes(searchfield.toLowerCase())
    })      

    return (
        <div className="tc">
            <h1 className="f1">ROBOFRIENDS</h1>
            <SearchBox searchChange = {onSearchChange}/>
            <Scroll> 
                <ErrorBoundry>
                    <CardList robots={filterSearch} />
                </ErrorBoundry>
            </Scroll>
        </div>        
    );
}

export default App