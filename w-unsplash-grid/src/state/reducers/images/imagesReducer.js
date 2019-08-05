import { IMAGES } from '../../types';

const imagesReducer = (state = [], action = {}) => {
	if (action.type === IMAGES.LOAD_SUCCESS) {
		return [...state, ...action.payload];
	}

	return state;
}

export default imagesReducer;
