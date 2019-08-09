import { END_POINT, KEY } from './config';

const fetchImageStats = async id => {
	const response = await fetch(`${END_POINT}/${id}/statistics?client_id=${KEY}`);
	const data = await response.json();

	if (response.status >= 400) {
		throw new Error(data.errors);
	}

	return data;
}

export { fetchImageStats };
