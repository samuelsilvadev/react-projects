import React from 'react';

const _renderOption = ({ value }, index) => {
	return (
		<option key={ index }>{ value }</option>
	);
}

export const FilesList = ({ className, files, handleOpenFile }) => {
	if (!files) {
		return null;
	}

	return (
		<select className={ className } onChange={ handleOpenFile }>
			{ files.map(_renderOption) }
		</select>
	);
}

export default FilesList;
