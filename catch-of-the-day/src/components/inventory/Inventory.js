import React from 'react';

import AddFishForm from '../add-fish-form/AddFishForm';
import { Button } from './../button';

import './Inventory.css';

const Inventory = ({ className, onAddFish, loadFishes }) => {
	return (
		<section className={ className }>
			<h2>Inventory</h2>
			<AddFishForm onAddFish={ onAddFish } />
			<Button className="button-load-fishes" text="Load Fishes Data" type="button" onClick={ loadFishes }  />
		</section>
	);
}

export default Inventory;
