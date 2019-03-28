import { videosRef } from '../firebase/init';
import { ADD_VIDEO, OPEN_REGISTER_VIDEO_FORM, CLOSE_REGISTER_VIDEO_FORM } from './types';

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

export const fetchVideos = () => (dispatch) => {
	videosRef.on('value', (snapshot) => {
		snapshot.forEach((video) => {
			dispatch(addVideo(video.val()));
		});
	});	
};

export const openRegisterVideoForm = () => ({
	type: OPEN_REGISTER_VIDEO_FORM,
});

export const closeRegisterVideoForm = () => ({
	type: CLOSE_REGISTER_VIDEO_FORM,
});
