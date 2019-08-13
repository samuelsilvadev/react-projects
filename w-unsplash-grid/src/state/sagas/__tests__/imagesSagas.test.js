import { runSaga } from 'redux-saga';

import { getPage, handleImageLoadWorkerSaga } from '../imagesSagas';
import { setLoadedImages, setLoadImagesError } from '../../actions';
import * as api from '../../../api/images';

describe('Images sagas module', () => {
	it('should return the correct state', () => {
		const nextPage = 10;
		const state = { nextPage };
		const result = getPage(state);

		expect(result).toBe(nextPage);
	});

	it('should load images and handle them in case of success', async () => {

		const images = ['image 1'];

		api.fetchImages = jest.fn(() => Promise.resolve(images))

		const dispatchedActions = [];

		const store = {
			getState: () => ({ nextPage: 1 }),
			dispatch: action => dispatchedActions.push(action),
		};

		await runSaga(store, handleImageLoadWorkerSaga).done;

		expect(api.fetchImages.mock.calls.length).toBe(1);
		expect(dispatchedActions).toContainEqual(setLoadedImages(images));

		api.fetchImages.mockClear();
	});

	it('should load images and handle them in case of error', async () => {

		const error = 'something went wrong';

		api.fetchImages = jest.fn(() => Promise.reject(error))

		const dispatchedActions = [];

		const store = {
			getState: () => ({ nextPage: 1 }),
			dispatch: action => dispatchedActions.push(action),
		};

		await runSaga(store, handleImageLoadWorkerSaga).done;

		expect(api.fetchImages.mock.calls.length).toBe(1);
		expect(dispatchedActions).toContainEqual(setLoadImagesError(error));

		api.fetchImages.mockClear();
	});
});
