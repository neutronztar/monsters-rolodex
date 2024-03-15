import { Component } from 'react';

import Card from '../card/card';
import './card-list.css';

class CardList extends Component {
    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) => (
                    <Card key={monster.id} monster={monster} />
                ))}
            </div>
        );
    }
}

export default CardList;
