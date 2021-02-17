import React from 'react';
import './SearchBox.css'

const SearchBox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input
                className='pa2 ba b--solid bw1 b--dark-pink bg-washed-green'
                type='search'
                placeholder='search your robots'
                onChange={searchChange}
            />
        </div>

    );
}

export default SearchBox;