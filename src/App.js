import { Component } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            filteredMonsters: [],
        };
    }

    async componentDidMount() {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await resp.json();
        this.setState({ monsters: users, filteredMonsters: users });
    }

    onSearchChange = (event) => {
        const filteredMonsters = this.state.monsters.filter((monster) => {
            const lowerName = monster.name.toLowerCase();
            const lowerFilter = event.target.value.toLowerCase();
            return lowerName.includes(lowerFilter);
        });

        this.setState({ filteredMonsters: filteredMonsters });
    };

    render() {
        return (
            <div className='App'>
                <h1 className='app-title'>Monsters Rolodex</h1>
                <SearchBox
                    className='monsters-search-box' //
                    onChangeHandler={this.onSearchChange}
                    placeholder='search monsters'
                />
                <CardList monsters={this.state.filteredMonsters} />
            </div>
        );
    }
}

export default App;
