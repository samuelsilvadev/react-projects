import { takeEvery, select, call, put } from 'redux-saga/effects';

import { IMAGES } from '../types';
import { setLoadedImages, setLoadImagesError } from '../actions';
import { fetchImages } from '../../api';

function getPage(state) {
	return state.nextPage;
}

function* watchImagesLoad() {
	yield takeEvery(IMAGES.LOAD, handleImageLoadWorkerSaga);
}

function* handleImageLoadWorkerSaga() {
	try {
		const page = yield select(getPage);
		const images = yield call(fetchImages, page);
		yield put(setLoadedImages(images))
	} catch (error) {
		yield put(setLoadImagesError(error.toString()))
	}
}

export default watchImagesLoad;
