/* eslint-disable indent */
import { OPEN_REGISTER_VIDEO_FORM, CLOSE_REGISTER_VIDEO_FORM } from '../types';

export const INITIAL_STATE = {
	isRegisterFormOpened: false
};

export function ui(state = INITIAL_STATE, action = {}) {
	switch (action.type) {
		case OPEN_REGISTER_VIDEO_FORM:
			return {
				...state,
				isRegisterFormOpened: true
			};
		case CLOSE_REGISTER_VIDEO_FORM:
			return {
				...state,
				isRegisterFormOpened: false
			};
		default:
			return state;
	}
}

export default ui;
