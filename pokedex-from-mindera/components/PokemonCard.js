import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Heart } from '@icons';

import Tag from './Tag';

import styles from './PokemonCard.module.css';

const renderTag = ({ text, kind }) => {
	return <Tag text={text} kind={kind} key={text} />;
};

const PokemonCard = ({ sources, title, number, tags = [] }) => {
	const [isFavorite, setFavorite] = useState(false);
	const onFavorite = () => {
		setFavorite(!isFavorite);
	};

	return (
		<article className={styles.card}>
			<picture className={styles.card__image}>
				<button
					className={styles['card__favorite-btn']}
					type='button'
					onClick={onFavorite}
				>
					<Heart
						className={`${styles.card__icon} ${isFavorite &&
							styles['card__icon--active']}`}
					/>
				</button>
				{typeof sources === 'string' && <img src={sources} />}
			</picture>
			<h2 className={styles.card__title}>{title}</h2>
			<span className={styles.card__subtitle}>{number}</span>
			<div className={styles.card__tags}>{tags.map(renderTag)}</div>
		</article>
	);
};

PokemonCard.propTypes = {
	sources: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
	title: PropTypes.string,
	number: PropTypes.string,
	tags: PropTypes.arrayOf({ text: PropTypes.string, kind: PropTypes.string })
};

export default PokemonCard;
