import React from 'react';
import PropTypes from 'prop-types';

import AddFishForm from '../fish-form/AddFishForm';
import EditFishForm from '../fish-form/EditFishForm';
import { Button } from './../button';

import './Inventory.css';

class Inventory extends React.PureComponent {
	render() {
		const { className, onAddFish, loadFishes, fishes } = this.props;

		return (
			<section className={ className }>
				<h2>Inventory</h2>
				{
					Object
						.keys(fishes)
						.map(this._renderEditForm, this)
				}
				<AddFishForm onAddFish={ onAddFish } />
				<Button className="button-load-fishes" text="Load Fishes Data" type="button" onClick={ loadFishes }  />
			</section>
		);
	}

	_renderEditForm(key) {
		const { fishes, onUpdateFish, onRemoveFish } = this.props;
		const fish = fishes[key];

		return (
			<EditFishForm
				key={ key }
				fishKey={ key }
				fish={ fish }
				onUpdateFish={ onUpdateFish }
				onRemoveFish={ onRemoveFish }
			/>
		);
	}
}

Inventory.propTypes = {
	className: PropTypes.string,
	fishes:PropTypes.object,
	loadFishes: PropTypes.func.isRequired
};

export default Inventory;
