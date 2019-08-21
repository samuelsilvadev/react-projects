import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

export const Card = ({ imageSrc, title, description, subtitle, action }) => (
	<div className="card">
		{imageSrc && <img className="card__image" src={imageSrc} alt={title} />}
		{title && <h2 className="card__title">{title}</h2>}
		{subtitle && <p className="card__subtitle">{subtitle}</p>}
		{description && <p className="card__description">{description}</p>}
		{action && <button type="button" className="card__action" onClick={action.onClick}>{action.text}</button>}
	</div>
);

Card.propTypes = {
	imageSrc: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	description: PropTypes.string,
	action: PropTypes.shape({
		text: PropTypes.string,
		onClick: PropTypes.func
	})
};

export default Card;
