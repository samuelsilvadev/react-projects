import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import './Card.css';

export const Card = ({ imageSrc, title, description, subtitle, action, link, ...rest }) => (
	<div className="card" {...rest}>
		{imageSrc && <img className="card__image" src={imageSrc} alt={title} data-test="card__image" />}
		{title && <h2 className="card__title" data-test="card__title">{title}</h2>}
		{subtitle && <p className="card__subtitle" data-test="card__subtitle">{subtitle}</p>}
		{description && <p className="card__description" data-test="card__description">{description}</p>}
		{action && <button type="button" className="card__action" onClick={action.onClick} data-test="card__button">{action.text}</button>}
		{link && <Link to={link.to} className="card__action card__action--link" data-test="card__link">{link.text}</Link>}
	</div>
);

Card.propTypes = {
	imageSrc: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
	description: PropTypes.string,
	action: PropTypes.shape({
		text: PropTypes.string.isRequired,
		onClick: PropTypes.func.isRequired
	}),
	link: PropTypes.shape({
		text: PropTypes.string.isRequired,
		to: PropTypes.any.isRequired
	})
};

export default Card;
