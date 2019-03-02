import axios from 'axios';
import { UPDATE_ADDRESS } from './types';

const API = process.env.REACT_APP_ZIP_CODE_ENDPOINT;
const ZIP_CODE_REGEX = /{ZIP_CODE}/;

export function updateAddress(payload) {
	return {
		type: UPDATE_ADDRESS,
		payload,
	};
}

export function fetchAddress(zipCode) {
	return async function(dispatch, getState) {
		const apiWithZipCode = API.replace(ZIP_CODE_REGEX, zipCode);

		try {
			const response = await axios.get(apiWithZipCode);

			dispatch(updateAddress(response.data));
		} catch (error) {
			console.error('Something went wrong...', error);
		}
	};
}
