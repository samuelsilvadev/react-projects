import React from 'react';
import PropTypes from 'prop-types';

import { SubmitButton } from './../button';

import './FishForm.css';

class AddFishForm extends React.PureComponent {
	state = {};

	render() {
		return (
			<form className='fish-form' onSubmit={this._handleSubmit}>
				<input
					className="fish-form__name"
					name='name'
					type='text'
					placeholder='Fish Name'
					required
					onChange={this._handleChange}
				/>
				<input
					className="fish-form__price"
					name='price'
					type='text'
					placeholder='Fish Price'
					required
					onChange={this._handleChange}
				/>
				<select
					className="fish-form__status"
					name='status'
					onChange={this._handleChange}
					required>
					<option value=''>Choose one</option>
					<option value='available'>Fresh!</option>
					<option value='unavailable'>Sold Out!</option>
				</select>
				<textarea
					className="fish-form__description"
					name='desc'
					placeholder='Fish Description'
					required
					onChange={this._handleChange}
				/>
				<input
					className="fish-form__image"
					name='image'
					type='text'
					placeholder='Fish Image'
					required
					onChange={this._handleChange}
				/>
				<SubmitButton text='+ Add Item' />
			</form>
		);
	}

	_handleChange = ({ target }) => {
		this.setState({
			[target.name]: target.value
		});
	};

	_handleSubmit = (event) => {
		event.preventDefault();

		this.props.onAddFish(this.state);

		event.target.reset();
	};
}

AddFishForm.propTypes = {
	onAddFish: PropTypes.func,
};

AddFishForm.defaultProps = {
	onAddFish: () => {}
};

export default AddFishForm;
