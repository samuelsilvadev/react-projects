import React, { Component } from 'react';
import './App.css';

class App extends Component {
	render() {
		return (
			<main className="wrapper">
				<h1 className="wrapper__title">Search informations about your zip code	</h1>
				<form className="search-form">
					<input type="search" />
					<button className="btn">Search</button>
				</form>
				<table className="search-results">
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
					</tbody>
				</table>
			</main>
		);
	}
}

export default App;
