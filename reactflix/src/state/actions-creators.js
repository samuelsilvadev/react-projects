import { ADD_VIDEO } from './types';

export const addVideo = ({ id, title }) => ({
	type: ADD_VIDEO,
	payload: {
		id,
		title
	}
});

export default addVideo;
