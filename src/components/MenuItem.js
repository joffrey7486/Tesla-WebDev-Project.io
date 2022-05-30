import React from 'react';
import "../assets/styles/MenuItem.scss"

const MenuItem = ({ title }) => {
    return (
        <div className='menuItem'>
            <h4>{title}</h4>
        </div>
    );
};

export default MenuItem;