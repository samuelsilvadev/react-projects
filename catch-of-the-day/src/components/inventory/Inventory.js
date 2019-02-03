import React from 'react';

import AddFishForm from '../add-fish-form/AddFishForm';

import './Inventory.css';

const Inventory = ({ className, onAddFish }) => {
	return (
		<section className={ className }>
			<h2>Inventory</h2>
			<AddFishForm onAddFish={ onAddFish } />
		</section>
	);
}

export default Inventory;
