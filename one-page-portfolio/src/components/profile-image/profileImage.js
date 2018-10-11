import React from 'react';
import PropTypes from 'prop-types';

import './profileImage.css';

const ProfileImage = ({ src, alt, ...restProps }) => {
	return (
		<figure className="profileImageWrapper">
			<img className="profileImage" src={ src } alt={ alt } { ...restProps } />
		</figure>
	);
};

ProfileImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired
};

export default ProfileImage;
