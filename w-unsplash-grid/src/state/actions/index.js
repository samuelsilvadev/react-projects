import { IMAGES } from './../types';

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
