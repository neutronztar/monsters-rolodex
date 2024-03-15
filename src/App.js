import { useState, useEffect, useCallback } from 'react';
import './App.css';
import CardList from './components/card-list/card-list';
import SearchBox from './components/search-box/search-box';

export default function App() {
    const [monsters, setMonsters] = useState([]);
    const [filteredMonsters, setFilteredMonsters] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await resp.json();
            setMonsters(users);
            setFilteredMonsters(users);
        }
        fetchData();
    }, []);

    const onSearchChange = useCallback(
        (event) => {
            const filtered = monsters.filter((monster) => {
                const lowerName = monster.name.toLowerCase();
                const lowerFilter = event.target.value.toLowerCase();
                return lowerName.includes(lowerFilter);
            });

            setFilteredMonsters(filtered);
        },
        [monsters]
    );

    return (
        <div className='App'>
            <h1 className='app-title'>Monsters Rolodex</h1>
            <SearchBox
                className='monsters-search-box' //
                onChangeHandler={onSearchChange}
                placeholder='search monsters'
            />
            <CardList monsters={filteredMonsters} />
        </div>
    );
}
