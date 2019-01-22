import React from 'react';
import PropTypes from 'prop-types';

const _renderOption = (arr, index) => {
	return (
		<option key={ index } value={ arr[0] } >{ arr[1].title }</option>
	);
};

export const FilesList = ({ className, files, handleOpenFile }) => {
	if (!files) {
		return null;
	}
	
	return (
		<select className={ className } onChange={ handleOpenFile }>
			<option value="">Select a file to open</option>
			{ Object.entries(files).map(_renderOption) }
		</select>
	);
};

FilesList.propTypes = {
	className: PropTypes.string,
	files: PropTypes.shape({
		key: PropTypes.shape({
			title: PropTypes.string,
			content: PropTypes.string,
		}),
	}),
	handleOpenFile: PropTypes.func,
};

export default FilesList;
