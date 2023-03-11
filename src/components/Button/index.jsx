import './index.css';
import React from 'react';

export const Button = ({ onClick }) => (
    <button
        onClick={onClick}
        className='btn-load'>
        Load more data
    </button>
)

