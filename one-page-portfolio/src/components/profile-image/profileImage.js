import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import './profileImage.css';

const ProfileImage = ({ src, alt, theme, ...restProps }) => {
	return (
		<figure className={ classnames("profileImageWrapper", theme.wrapper )}>
			<img className={ classnames("profileImage", theme.image )} src={ src } alt={ alt } { ...restProps } />
		</figure>
	);
};

ProfileImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
	theme: PropTypes.shape({
		wrapper: PropTypes.string,
		image: PropTypes.string,
	}),
};

ProfileImage.defaultProps = {
	theme: {},
};

export default ProfileImage;
