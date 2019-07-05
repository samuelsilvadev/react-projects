import { SELECT_LIBRARY, Action } from '../types';

export function selectLibrary(id: Number): Action {
	return {
		type: SELECT_LIBRARY,
		payload: id
	};
}
