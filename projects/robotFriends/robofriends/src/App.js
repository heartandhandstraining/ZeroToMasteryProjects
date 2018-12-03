import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import { cats } from './cats';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchField: ''  
        }
    }

    componentDidMount() {
        this.setState( { cats: cats } )
        console.log('check');
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
            <h1 className='f1'>MiaowyFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList cats={filteredCats} />
        </div>
        );
     };
};

export default App;