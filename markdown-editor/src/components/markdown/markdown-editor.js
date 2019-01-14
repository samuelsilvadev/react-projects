import React from 'react';
import PropTypes from 'prop-types';

import './markdown-editor.css';

const MardownEditor = ({ value, isSaving, getValue, handleOnSave, handleOnDelete, handleOnChange }) => {
	return (
		<main className="markdown">
			<header className="markdown__header">
				<p className="markdown__header__feedback">
					{ isSaving ? 'Saving...' : 'Saved' }
				</p>
				<button className="markdown__header__save-button" onClick={ handleOnSave }>
					Save
				</button>
				<button className="markdown__header__remove-button" onClick={ handleOnDelete }>
					Remove
				</button>
			</header>
			<form className="markdown__editor">
				<textarea autoFocus value={ value } onChange={ handleOnChange } />
			</form>
			<article className="markdown__preview" dangerouslySetInnerHTML={ getValue() } />
		</main>
	)
};

MardownEditor.propTypes = {
	value: PropTypes.string,
	isSaving: PropTypes.bool.isRequired,
	getValue: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	handleOnSave: PropTypes.func.isRequired,
	handleOnDelete: PropTypes.func.isRequired,
};

export default MardownEditor;
