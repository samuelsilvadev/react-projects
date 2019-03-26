import { videosRef } from '../firebase/init';
import { ADD_VIDEO } from './types';

export const addVideo = ({ id, title }) => ({
	type: ADD_VIDEO,
	payload: {
		id,
		title
	}
});

export const registerVideo = ({ id, title }) => async (dispatch) => {
	await videosRef.child(id).update({ id, title });
	
	dispatch(addVideo({ id, title }));
};

export default addVideo;
