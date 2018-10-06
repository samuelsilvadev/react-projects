import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends React.Component {
	state = {
		value: this.props.value,
	}

	render() {
		return (
			<div className="counter">
				<span
					className={this._getBadgeClasses()}>
					{this._formatCount()}
				</span>
				<button
					className="btn btn-primary btn-sm counter__btn-increment"
					onClick={this._handleClickIncrementBtn}>
					Increment
				</button>
				<button
					className="btn btn-danger btn-sm"
					onClick={this._handleClickDeleteBtn}>
					Delete
				</button>
			</div>
		);
	}

	_handleClickIncrementBtn = () => {
		const { value } = this.state;
		this.setState({
			value: value + 1,
		});
	}

	_handleClickDeleteBtn = () => {
		const { onDelete, id } = this.props;
		onDelete(id);
	}

	_formatCount() {
		const { value } = this.state;
		return (value === 0 ? 'Zero' : value);
	}

	_getBadgeClasses() {
		const { value } = this.state;
		return `counter__quantity m-2 badge badge-${value === 0 ? 'warning' : 'success'}`;
	}
}

Counter.propTypes = {
	id: PropTypes.number.isRequired,
	value: PropTypes.number,
	onDelete: PropTypes.func,
};

Counter.defaultProps = {
	value: 0,
	onDelete: () => { },
};

export default Counter;
