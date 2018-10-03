import React from 'react';
import Counter from './../counter/Counter';

import './App.css';

const App = () => (
    <section className="shoppingCart">
        <h1 className="shoppingCart__title">Shopping Cart</h1>
        <Counter className="shoppingCart__counter" value={2}/>
        <Counter className="shoppingCart__counter" />
        <Counter className="shoppingCart__counter" />
    </section>
);

export default App;