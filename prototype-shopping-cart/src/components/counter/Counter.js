import React from 'react';
import PropTypes from 'prop-types';

class Counter extends React.Component {

	render() {
		return (
			<div className="counter">
				<span
					className={this._getBadgeClasses()}>
					{this._formatCount()}
				</span>
				<button
					data-test="counter-btn-increment"
					className="btn btn-secondary btn-sm counter__btn-increment"
					onClick={this._handleClickIncrementBtn}>
					Increment
				</button>
				<button
					data-test="counter-btn-delete"
					className="btn btn-danger btn-sm"
					onClick={this._handleClickDeleteBtn}>
					Delete
				</button>
			</div>
		);
	}

	_handleClickIncrementBtn = () => {
		const { onIncrement, id } = this.props;
		onIncrement(id);
	}

	_handleClickDeleteBtn = () => {
		const { onDelete, id } = this.props;
		onDelete(id);
	}

	_formatCount() {
		const { value } = this.props;
		return (value === 0 ? 'Zero' : value);
	}

	_getBadgeClasses() {
		const { value } = this.props;
		return `counter__quantity m-2 badge badge-${value === 0 ? 'warning' : 'success'}`;
	}
}

Counter.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.number,
	onDelete: PropTypes.func,
	onIncrement: PropTypes.func,
};

Counter.defaultProps = {
	value: 0,
	onDelete: () => { },
	onIncrement: () => { },
};

export default Counter;
