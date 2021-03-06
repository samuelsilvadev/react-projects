import { END_POINT, KEY } from './config';

const fetchImages = async page => {
	const response = await fetch(`${END_POINT}?client_id=${KEY}&per_page=5&page=${page}`);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error(data.errors);
	}

	return data;
}

export { fetchImages };
