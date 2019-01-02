import React from 'react';
import PropTypes from 'prop-types';

import './markdown-editor.css';

const MardownEditor = ({ value, handleOnChange }) => {
	return (
		<div className="wrapper">
			<form className="editor">
				<textarea onChange={ handleOnChange } />
			</form>
			<div className="preview" dangerouslySetInnerHTML={ value() } />
		</div>
	)
};

MardownEditor.propTypes = {
	value: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
};

export default MardownEditor;
