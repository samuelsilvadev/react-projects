import React from 'react';

import './StorePicker.css';

const StorePicker = () => {
	return (
		<form className="store-selector">
			<h2>Please Enter a Store</h2>
			<input className="store-name" type="text" name="store-name" required placeholder="Store Name" />
			<button className="store-button" type="submit">Visit Store →</button>
		</form>
	);
}

export default StorePicker;
