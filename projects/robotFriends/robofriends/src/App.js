import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cats } from './cats';


class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: cats,
            searchField: ''  
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {  
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        } )
        return (
        <div className="tc">
            <h1>MiaowyFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList cats={filteredCats} />
        </div>
        );
     };
};

export default App;