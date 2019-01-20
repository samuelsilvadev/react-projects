import React from 'react';
import PropTypes from 'prop-types';

const _renderOption = (value, index) => {
	return (
		<option key={ index }>{ value }</option>
	);
};

export const FilesList = ({ className, files, handleOpenFile }) => {
	if (!files) {
		return null;
	}
	
	return (
		<select className={ className } onChange={ handleOpenFile }>
			<option value="">Select a file to open</option>
			{ Object.keys(files).map(_renderOption) }
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
