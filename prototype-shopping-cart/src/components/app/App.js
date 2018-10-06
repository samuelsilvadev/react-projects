import React from 'react';
import CounterContainer from '../counter/CounterContainer';

import './App.css';

class App extends React.Component {

	render() {
		return (
			<section className="shoppingCart">
				<h1 className="shoppingCart__title">Shopping Cart</h1>
				<CounterContainer />
			</section>
		);
	}
}

export default App;
