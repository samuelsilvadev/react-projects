import axios from 'axios';
import {
	UPDATE_ADDRESS,
	LOADING_ADDRESS,
	ERROR_LOADING_ADDRESS
} from './types';

const API = process.env.REACT_APP_ZIP_CODE_ENDPOINT;
const ZIP_CODE_REGEX = /{ZIP_CODE}/;

export function fetchAddress(zipCode) {
	return async function fetchAddressActionCreator(dispatch, getState) {
		const apiWithZipCode = API.replace(ZIP_CODE_REGEX, zipCode);

		dispatch({ type: LOADING_ADDRESS });

		try {
			const response = await axios.get(apiWithZipCode);

			dispatch({
				type: UPDATE_ADDRESS,
				payload: response.data
			});
		} catch (error) {
			console.error('Something went wrong...', error);

			dispatch({
				type: ERROR_LOADING_ADDRESS,
				payload: { message: error }
			});
		}
	};
}
