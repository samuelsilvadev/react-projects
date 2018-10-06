import React from 'react';
import CounterContainer from '../counter/CounterContainer';

import './App.css';

const mockCounters = [
	{
		id: 1,
		value: 2,
	},
	{
		id: 2,
	},
	{
		id: 3,
	}
];

class App extends React.Component {

	state = {
		counters: mockCounters,
	}

	render() {
		const { counters } = this.state;
		
		return (
			<section className="shoppingCart">
				<h1 className="shoppingCart__title">Shopping Cart</h1>
				<CounterContainer counters={counters} onDelete={this._removeCounter} />
			</section>
		);
	}

	_removeCounter = (id) => {
		const { counters } = this.state;
		const newCounters = counters.filter(counter => counter.id !== id);

		this.setState({
			counters: newCounters,
		});
	}
}

export default App;
