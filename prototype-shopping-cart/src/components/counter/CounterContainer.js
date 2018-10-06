import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class CounterContainer extends React.Component {

	render() {
		const { counters } = this.props;
		return (
			counters.map(this._renderCounter, this)
		);
	}

	_renderCounter(data) {
		const { id, value } = data;
		const { onDelete } = this.props;
		return <Counter key={id} id={id} value={value} onDelete={onDelete}/>;
	}
};

CounterContainer.propTypes = {
	onDelete: PropTypes.func,
	counters: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			value: PropTypes.number,
		})
	),
};

CounterContainer.defaultProps = {
	counters: [],
	onDelete: () => { },
};

export default CounterContainer;
