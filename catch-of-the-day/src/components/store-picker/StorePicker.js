import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import './StorePicker.css';

class StorePicker extends React.PureComponent {
	constructor(props) {
		super(props);

		this.inputRef = React.createRef();

		this._handleSubmit = this._handleSubmit.bind(this);
	}

	render() { 
		return (
			<form className="store-selector" onSubmit={ this._handleSubmit }>
				<h2>Please Enter a Store</h2>
				<input
					ref={ this.inputRef }
					className="store-name"
					type="text"
					name="store-name"
					required
					placeholder="Store Name"
				/>
				<button className="store-button" type="submit">Visit Store →</button>
			</form>
		);
	}

	_handleSubmit(event) {
		event.preventDefault();
		
		if (this.inputRef && this.inputRef.current && this.inputRef.current.value) {
			this.props.history.push(`/store/${this.inputRef.current.value}`)
		}
	}
}

StorePicker.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func.isRequired,
	}),
}

export default withRouter(StorePicker);
