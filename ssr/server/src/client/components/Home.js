import React from 'react';

function Home(props) {
    return (
        <div { ...props }>
            <h1>Hey I'm the Home component</h1>
        </div>
    );
}

export default Home;