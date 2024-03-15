import './search-box.css';

export default function SearchBox({ onChangeHandler, placeholder, className }) {
    return (
        <input
            className={`search-box ${className}`} //
            type='search'
            placeholder={placeholder}
            onChange={onChangeHandler}
        />
    );
}
