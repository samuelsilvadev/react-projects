import React, { Component } from 'react';
import MainPage from './components/main-page';
import axios from 'axios';

const BASE_API = 'https://api.github.com';
const END_POINT_USERS = `${BASE_API}/users/{login}`;
const END_POINT_REPOS = `${BASE_API}/users/{login}/{type}?per_page=3&page={page}`;
const ENTER = 13;
const INITIAL_STATE_REPOS = {
	repos: [],
	activePage: 1,
	totalPages: 1,
};
const REGEX_PAGE_SIZE = /&page=(\d+)>; rel="last"/

class App extends Component {
	constructor() {
		super();
		this.state = {
			userInfo: null,
			repos: INITIAL_STATE_REPOS,
			starred: INITIAL_STATE_REPOS,
			showLoader: false,
		};

		this.handleSearch = this.handleSearch.bind(this);
		this.handleClickRepos = this.handleClickRepos.bind(this);
		this.handleClickStarred = this.handleClickStarred.bind(this);
	}

	getRepos(type, page = 1) {
		const { userInfo: { login } } = this.state;
		
		if (typeof page !== 'number') {
			page = 1;
		}
		
		axios
			.get(END_POINT_REPOS
				.replace('{login}', login)
				.replace('{type}', type)
				.replace('{page}', page)
			)
			.then(({ headers, data }) => {

				let totalPages = this.state[type].totalPages;

				if(totalPages <= 1) {
					const headerLink = headers.link;
					const totalPagesMatch = headerLink ? headerLink.match(REGEX_PAGE_SIZE) : null;
					totalPages = totalPagesMatch ? totalPagesMatch[1] : totalPages;
				}
				
				this.setState({
					[type]: {
						repos: data,
						activePage: page,
						totalPages: +totalPages, 
					},
				});
			});
	}

	handleSearch(e) {
		const keyCode = e.which || e.keyCode;
		const nameUser = e.target.value;

		if (keyCode === ENTER) {
			this.setState({ showLoader: true });
			axios
				.get(END_POINT_USERS.replace('{login}', nameUser))
				.then(({ data }) => {
					this.setState({
						userInfo: {
							userName: data.name,
							repos: data.public_repos,
							followers: data.followers,
							following: data.following,
							photo: data.avatar_url,
							login: data.login,
						},
						repos: INITIAL_STATE_REPOS,
						starred: INITIAL_STATE_REPOS,
					});
				})
				.finally(() => {
					this.setState({ showLoader: false });
				});
		}
	}

	handleClickRepos(page) {
		this.getRepos('repos', page);
	}

	handleClickStarred(page) {
		this.getRepos('starred', page);
	}

	render() {
		return (
			<MainPage
				{...this.state}
				handleSearch={this.handleSearch}
				handleClickRepos={this.handleClickRepos}
				handleClickStarred={this.handleClickStarred}
			/>
		);
	}
}

export default App;
