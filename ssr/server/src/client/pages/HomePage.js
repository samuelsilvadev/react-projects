import React from 'react';

function _handleClick() {
    console.log('button was clicked');
}

function HomePage() {
    return (
        <div>
            <h1>Hey I'm the Home component, with behaviour</h1>
            <button onClick={ _handleClick }>Press Me</button>
        </div>
    );
}

export default HomePage;