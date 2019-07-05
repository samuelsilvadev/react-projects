import { Action, SELECT_LIBRARY } from '../types';

export function selectionLibraryReducer(state = null, action: Action) {
	if (action.type === SELECT_LIBRARY) {
		return action.payload;
	}

	return state;
}
