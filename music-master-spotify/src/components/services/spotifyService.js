const BASE_URL = 'https://api.spotify.com/v1/';

function _handleError(error) {
	console.error(error);
}
const spotifyService = {
	getArtist: function(errorCallback = _handleError, query) {
		const END_POINT = 'search?';
		const FETCH_URL = `${BASE_URL}${END_POINT}q=${query}&type=artist&limit=1`;
		return window
			.fetch(FETCH_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: process.env.REACT_APP_SPOTIFY_TOKEN
				}
			})
			.then((resp) => resp.json())
			.catch(errorCallback);
	},
	getTopTracks: function(errorCallback = _handleError, artistId) {
        const END_POINT = 'artists';
		const FETCH_URL = `${BASE_URL}${END_POINT}/${artistId}/top-tracks?country=US&`;
		return window
			.fetch(FETCH_URL, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
					Authorization: process.env.REACT_APP_SPOTIFY_TOKEN
				}
			})
			.then((resp) => resp.json())
			.catch(errorCallback);
	},
};

export default spotifyService;
