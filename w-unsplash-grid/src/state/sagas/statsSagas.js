import { call, fork, take, put } from 'redux-saga/effects';

import { IMAGES } from '../types';
import { loadImageStats, setImageStats, setImageStatsError } from '../actions';
import { fetchImageStats } from '../../api';

function* handleStatsRequest(id) {
	try {
		yield put(loadImageStats(id));
		const response = yield call(fetchImageStats, id);
		yield put(setImageStats(id, response.downloads.total));
	} catch (error) {
		yield put(setImageStatsError(id));
	}
}

function* watchStats() {
	while (true) {
		const { payload: images } = yield take(IMAGES.LOAD_SUCCESS);

		for (const image of images) {
			yield fork(handleStatsRequest, image.id);
		}
	}
}

export default watchStats;
