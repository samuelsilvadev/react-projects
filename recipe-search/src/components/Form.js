import React from 'react'
import PropTypes from 'prop-types';

import './Form.css';

const Form = ({ onSubmit }) => (
	<form className="search-form" onSubmit={onSubmit}>
		<input className="search-form__input" type="search" name="recipeName" />
		<button type="submit" className="search-form__button">Search</button>
	</form>
);

Form.propTypes = {
	onSubmit: PropTypes.func
};

export default Form;
