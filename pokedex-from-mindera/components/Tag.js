import React from 'react';
import PropTypes from 'prop-types';

import styles from './Tag.module.css';

const getKindClassName = kind => styles[kind];

const Tag = ({ text, kind = 'gray' }) => {
	const kindClassName = getKindClassName(kind);

	return <span className={`${styles.tag} ${kindClassName}`}>{text}</span>;
};

Tag.propTypes = {
	text: PropTypes.string.isRequired,
	kind: PropTypes.oneOf(['green', 'purple', 'red', 'royal', 'blue'])
};

export default Tag;
