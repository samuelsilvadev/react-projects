import { IMAGES } from '../../types';

const nextPageReducer = (state = 1, action = {}) => {
	if (action.type === IMAGES.LOAD_SUCCESS) {
		return state + 1;
	}

	return state;
};

export default nextPageReducer;
