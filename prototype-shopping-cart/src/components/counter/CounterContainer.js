import React from 'react';
import Counter from './Counter';

import './Counter.css';

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

class CounterContainer extends React.Component {

	state = {
		counters: mockCounters,
	}

	render() {
		const { counters } = this.state;
		return (
			<React.Fragment>
				<button
					data-test="counter-container-btn-reset"
					className="btn btn-primary btn-sm btn-reset"
					disabled={!counters.length}
					onClick={this._handleClickResetBtn}>
					Reset
				</button>
				{counters.map(this._renderCounter, this)}
			</React.Fragment>
		);
	}

	_renderCounter(data) {
		const { id, value } = data;
		const { _removeCounter, _handleClickIncrementBtn } = this;
		return <Counter
			key={id}
			id={id}
			value={value}
			onIncrement={_handleClickIncrementBtn}
			onDelete={_removeCounter} />;
	}

	_handleClickResetBtn = () => {
		const { _resetAllCounters } = this;
		_resetAllCounters();
	}

	_handleClickIncrementBtn = (id) => {
		const { counters } = this.state;
		const newCounters = counters.map(counter => {
			if (counter.id === id) {
				if (counter.value) {
					counter.value++;
				} else {
					counter.value = 1;
				}
			}
			return counter;
		});

		this.setState({
			counters: newCounters,
		});
	}

	_removeCounter = (id) => {
		const { counters } = this.state;
		const newCounters = counters.filter(counter => counter.id !== id);

		this.setState({
			counters: newCounters,
		});
	}

	_resetAllCounters = () => {
		const { counters } = this.state;
		const newCounters = counters.map(counter => {
			counter.value = 0;
			return counter;
		});

		this.setState({
			counters: newCounters,
		});
	}
};

export default CounterContainer;
