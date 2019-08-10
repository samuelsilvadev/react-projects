import { IMAGES, STATS } from './../types';

export const loadImages = () => ({
	type: IMAGES.LOAD
});

export const setLoadedImages = (images) => ({
	type: IMAGES.LOAD_SUCCESS,
	payload: images
});

export const setLoadImagesError = (error) => ({
	type: IMAGES.LOAD_FAIL,
	payload: error
});

export const loadImageStats = (id) => ({
	type: STATS.LOAD,
	payload: id
});

export const setImageStats = (id, downloads) => ({
	type: STATS.LOAD_SUCCESS,
	payload: { id, downloads }
});

export const setImageStatsError = (id) => ({
	type: STATS.LOAD_FAIL,
	payload: id
});
