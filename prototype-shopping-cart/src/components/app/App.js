import React from 'react';
import CounterContainer from '../counter/CounterContainer';

import './App.css';

const counters = [
    {
        value: 2,
        className: "shoppingCart__counter",
    },
    {
        className: "shoppingCart__counter",
    },
    {
        className: "shoppingCart__counter",
    }
];

const App = () => (
    <section className="shoppingCart">
        <h1 className="shoppingCart__title">Shopping Cart</h1>
        <CounterContainer counters={counters} />
    </section>
);

export default App;
