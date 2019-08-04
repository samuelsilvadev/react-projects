import React, { useEffect, useState, useCallback } from 'react';

import './ImagesGrid.css';

const KEY = '5f96323678d05ff0c4eb264ef184556868e303b32a2db88ecbf15746e6f25e02';

function ImagesGrid(props) {
	const [images, setImages] = useState([]);

	useEffect(() => {
		fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&per_page=28`)
			.then(response => response.json())
			.then(images => setImages(images));
	}, []);

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
		<div className="grid">
			{images.map(renderImage)}
		</div>
	);
}

export default ImagesGrid;
