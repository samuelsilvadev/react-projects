import React from 'react';
import { connect } from 'react-redux';

import { fetchAddress } from './state/actions-creator';

import './App.css';

const App = ({
	fetchAddress,
	address, city, code, district, state, status, message, isLoading,
}) => {
	function _handleSubmit(event) {
		event.preventDefault();

		const zipCode = event.target['zip-code'].value;

		fetchAddress(zipCode);
	};

	return (
		<main className='wrapper'>
			<h1 className='wrapper__title'>
				Search informations about your zip code
			</h1>
			<form onSubmit={ _handleSubmit } className='search-form'>
				<input type='search' name="zip-code" required />
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

const mapStateToProps = (state) => state.address;

const mapDispatchToProps = { fetchAddress };

export default connect(mapStateToProps, mapDispatchToProps)(App);
