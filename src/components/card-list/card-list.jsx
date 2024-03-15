import Card from '../card/card';
import './card-list.css';

export default function CardList({ monsters }) {
    return (
        <div className='card-list'>
            {monsters.map((monster) => (
                <Card key={monster.id} monster={monster} />
            ))}
        </div>
    );
}
