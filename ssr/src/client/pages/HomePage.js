import React from 'react';
import { Helmet } from 'react-helmet';

function _handleClick() {
    console.log('button was clicked');
}

function renderSeoData() {
    return (
        <Helmet>
            <title>Home Page</title>
            <meta property="og:title" content="Home Page" />
        </Helmet>
    );
}

function HomePage() {
    return (
        <div>
            { renderSeoData() }
            <h1>Hey I'm the Home component, with behaviour</h1>
            <button onClick={ _handleClick }>Press Me</button>
        </div>
    );
}

export default HomePage;