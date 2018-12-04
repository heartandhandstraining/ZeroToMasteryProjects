import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
//import { cats } from './cats';
import './App.css';


class App extends Component {
    constructor() {
        super()
        this.state = {
            cats: [],
            searchField: ''  
        }
        console.log('LifeCycle Hook #1 - Constructor')
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => this.setState({ cats: users }))
        //this.setState( { cats: cats } )
        console.log(`LifeCycle Hook #2 - I'm lexically second, but last in the mounting
        lifecycle - I'm componentDidMount`);
    }

    onSearchChange = (event) => {
        this.setState({ searchField: event.target.value })
    }
    
    render() {  
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase());
        } )
        console.log(`LifeCycle Hook #3 - I'm lexically third, but I get run second
        because there is no 'componentWillMount', then again when 'componentDidMount'
        changes the cats array to the imported and destructured cat object)`);
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