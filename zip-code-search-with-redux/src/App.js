import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

const API = process.env.REACT_APP_ZIP_CODE_ENDPOINT;
const ZIP_CODE_REGEX = /{ZIP_CODE}/;
const INITIAL_STATE = {
	address: '',
	city: '',
	code: '',
	district: '',
	state: '',
	status: 1
};

async function fetchZipCode(callback) {
	const apiWithZipCode = API.replace(ZIP_CODE_REGEX, '62870000');

	try {
		const response = await axios.get(apiWithZipCode);
		
		callback && callback(response.data);
	} catch (error) {
		console.error('Something wen wrong...', error);
	}
}

const App = () => {
	const [zipInformation, setZipInformation] = useState(INITIAL_STATE);

	useEffect(() => {
		fetchZipCode(setZipInformation);
	}, []);

	const { address, city, code, district, state } = zipInformation;

	return (
		<main className='wrapper'>
			<h1 className='wrapper__title'>
				Search informations about your zip code{' '}
			</h1>
			<form className='search-form'>
				<input type='search' />
				<button className='btn'>Search</button>
			</form>
			<table className='search-results'>
				<thead>
					<tr>
						<td>ZIP</td>
						<td>Adress</td>
						<td>Neighbourhood</td>
						<td>City</td>
						<td>State</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>{ code }</td>
						<td>{ address }</td>
						<td>{ district }</td>
						<td>{ city }</td>
						<td>{ state }</td>
					</tr>
				</tbody>
			</table>
		</main>
	);
};

export default App;
