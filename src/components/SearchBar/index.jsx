import './index.css';
import React from 'react';

export const SearchBar = ({ searchValue, handleChange }) => (

    <input
        type='search'
        className='search-input'
        placeholder='Digite sua pesquisa'
        value={searchValue}
        onChange={handleChange}
    />
)