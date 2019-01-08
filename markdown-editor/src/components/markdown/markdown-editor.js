import React from 'react';
import PropTypes from 'prop-types';

import './markdown-editor.css';

const MardownEditor = ({ getValue, handleOnChange }) => {
	return (
		<main className="markdown">
			<form className="markdown__editor">
				<textarea autoFocus onChange={ handleOnChange } />
			</form>
			<article className="markdown__preview" dangerouslySetInnerHTML={ getValue() } />
		</main>
	)
};

MardownEditor.propTypes = {
	getValue: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
};

export default MardownEditor;
