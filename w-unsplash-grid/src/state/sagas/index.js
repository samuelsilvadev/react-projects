import { all } from 'redux-saga/effects';

import imagesSagas from './imagesSagas';
import statsSagas from './statsSagas';

export default function* rootSaga() {
	yield all([
		imagesSagas(),
		statsSagas()
	]);
}
