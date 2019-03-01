import React, { useState, useEffect } from 'react';
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
	status: 0,
	message: null,
};

const App = () => {
	const [zipInformation, setZipInformation] = useState(INITIAL_STATE);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(false);
	}, [zipInformation]);

	const { address, city, code, district, state, status, message } = zipInformation;

	function _handleSubmit(event) {
		event.preventDefault();

		const zipCode = event.target['zip-code'].value;

		setIsLoading(true);
		fetchZipCode(zipCode);	
	};

	async function fetchZipCode(zipCode) {
		const apiWithZipCode = API.replace(ZIP_CODE_REGEX, zipCode);
	
		try {
			const response = await axios.get(apiWithZipCode);
			
			console.log('TCL: fetchZipCode -> response', response);
			
			setZipInformation(response.data);
		} catch (error) {
			console.error('Something wen wrong...', error);
		}
	}

	return (
		<main className='wrapper'>
			<h1 className='wrapper__title'>
				Search informations about your zip code
			</h1>
			<form onSubmit={ _handleSubmit } className='search-form'>
				<input type='search' name="zip-code" />
				<button
					className='btn'
					disabled={ isLoading }>
					{ isLoading ? 'Searching...' : 'Search' }
				</button>
			</form>
			{
				!!message && 
				<p className="search-error">
					Informations not found.
				</p>
			}
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
				{ !!status && !message &&
					<tbody>
						<tr>
							<td>{ code }</td>
							<td>{ address }</td>
							<td>{ district }</td>
							<td>{ city }</td>
							<td>{ state }</td>
						</tr>
					</tbody>
				}
			</table>
		</main>
	);
};

export default App;
