import React from 'react';
import PropTypes from 'prop-types';

const SaveMessage = ({ isSaving, className }) => (
	isSaving !== null &&
	<p className={ className }>
		{ isSaving ? 'Saving...' : 'Saved' }
	</p>
);

SaveMessage.propTypes = {
	isSaving: PropTypes.bool,
	className: PropTypes.string,
};

export default SaveMessage;
