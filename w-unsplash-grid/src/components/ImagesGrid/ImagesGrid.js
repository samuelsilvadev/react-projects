import React, { useEffect, useCallback, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadImages } from '../../state/actions';

import './ImagesGrid.css';

function ImagesGrid() {
	const dispatch = useDispatch();
	const images = useSelector((state) => state.images);
	const isLoading = useSelector((state) => state.loading);
	const imagesLoadError = useSelector((state) => state.error);

	useEffect(() => {
		dispatch(loadImages());
	}, [dispatch]);

	const renderImage = useCallback((image = {}) => {
		const { urls, user, id, height, width } = image;
		const ratio = Math.ceil(height / width);

		return (
			<figure key={id} className={`figure figure-${ratio}`}>
				<img className="image" src={urls.small} alt={user.username} />
			</figure>
		);
	}, []);

	return (
		<Fragment>
			{imagesLoadError && <p className="error">{imagesLoadError}</p>}
			{
				images && images.length > 0 &&
				<div className="grid">
					{images.map(renderImage)}
				</div>
			}
			{isLoading && <p className="loading">Loading...</p>}
		</Fragment>
	);
}

export default ImagesGrid;
