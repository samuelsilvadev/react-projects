import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './../button';

import './FishForm.css';

class EditFishForm extends React.PureComponent {	
	render() {
		const { fish: { name, price, status, desc, image } } = this.props;

		return (
			<form className='fish-form'>
				<input
					className="fish-form__name"
					name='name'
					type='text'
					placeholder='Fish Name'
					required
					value={name}
					onChange={this._handleChange}
				/>
				<input
					className="fish-form__price"
					name='price'
					type='text'
					placeholder='Fish Price'
					required
					value={price}
					onChange={this._handleChange}
				/>
				<select
					className="fish-form__status"
					name='status'
					onChange={this._handleChange}
					required
					value={status}>
					<option value=''>Choose one</option>
					<option value='available'>Fresh!</option>
					<option value='unavailable'>Sold Out!</option>
				</select>
				<textarea
					className="fish-form__description"
					name='desc'
					placeholder='Fish Description'
					required
					value={desc}
					onChange={this._handleChange}
				/>
				<input
					className="fish-form__image"
					name='image'
					type='text'
					placeholder='Fish Image'
					required
					value={image}
					onChange={this._handleChange}
				/>
				<Button
					className="fish-form__remove-button"
					type="button"
					text="- Remove Item"
					onClick={ this._handleRemoveFish } />
			</form>
		);
	}

	_handleChange = ({ target }) => {
		const { fishKey, fish, onUpdateFish } = this.props;

		const updatedFish =  {
			...fish,
			[target.name]: target.value,
		};

		onUpdateFish(fishKey, updatedFish);
	};

	_handleRemoveFish = () => {
		const { fishKey, onRemoveFish } = this.props;
		
		onRemoveFish(fishKey);
	}
}

EditFishForm.propTypes = {
	onUpdateFish: PropTypes.func,
	onRemoveFish: PropTypes.func,
};

EditFishForm.defaultProps = {
	onUpdateFish: () => {},
	onRemoveFish: () => {},
};

export default EditFishForm;
