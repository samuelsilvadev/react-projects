import React from 'react';
import PropTypes from 'prop-types';

import FilesList from '../../components/files-list';
import SaveMessage from '../../components/save-message';

import './markdown-editor.css';

const MardownEditor = (props) => {
	const { 
		value,
		isSaving,
		getValue,
		handleOnSave,
		handleOnCreate,
		handleOnDelete,
		handleOnChange,
		...remainingProps
	} = props;

	return (
		<main className="markdown">
			<header className="markdown__header">
				<SaveMessage className="markdown__header__feedback" isSaving={ isSaving } />
				<FilesList className="markdown__header__files-list" { ...remainingProps } />
				<button className="button markdown__header__save-button" onClick={ handleOnSave }>
					Save
				</button>
				<button className="button markdown__header__new-button" onClick={ handleOnCreate }>
					New
				</button>
				<button className="button markdown__header__remove-button" onClick={ handleOnDelete }>
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
	getValue: PropTypes.func.isRequired,
	handleOnChange: PropTypes.func.isRequired,
	handleOnSave: PropTypes.func.isRequired,
	handleOnCreate: PropTypes.func.isRequired,
	handleOnDelete: PropTypes.func.isRequired,
};

export default MardownEditor;
