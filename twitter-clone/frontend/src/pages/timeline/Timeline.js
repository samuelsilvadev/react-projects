'use strict';

import React from 'react';

import CONSTANTS from '../../constants';
import { API } from '../../services';

import { Logo, Tweet } from '../../components';

import './Timeline.css';

const ENTER = 13;

const Timeline = React.createClass({
	getInitialState: function getInitialState() {
		return {
			tweetContent: '',
			tweets: [],
		};
	},
	componentDidMount: function componentDidMount() {
		const { _handleSuccessGetTweets, _handleError } = this;

		API.get('tweets')
			.then(_handleSuccessGetTweets)
			.catch(_handleError);
	},
	render: function render() {
		const { tweetContent, tweets } = this.state;

		return (
			<div className="timeline-wrapper">
				<Logo className="timeline__logo"/>
				<form className="timeline__form">
					<textarea
						className="timeline__form__textarea"
						value={tweetContent}
						onChange={this._handleTextareaChange}
						onKeyDown={this._handleKeyDown}/>
				</form>
				<ul className="timeline__tweets">
					{ tweets.map(this._renderTweet) }
				</ul>
			</div>
		);
	},
	_renderTweet: function _renderTweet(tweet) {
		return <Tweet key={ tweet._id } tweet={ tweet } handleError={ this._handleError }/>;
	},
	_handleTextareaChange: function _handleTextareaChange(event) {
		this.setState({
			tweetContent: event.target.value,
		});
	},
	_handleKeyDown: function _handleKeyDown(event) {
		if (event.ctrlKey && event.keyCode === ENTER) {
			this._saveTweet();
		}
	},
	_saveTweet: function _saveTweet() {
		const { _handleSuccess, _handleError } = this;
		const { storage } = CONSTANTS;
		const { tweetContent: content } = this.state;
		const author = window.localStorage.getItem(storage.username);

		API.post('tweets', { author, content })
			.then(_handleSuccess)
			.catch(_handleError);
	},
	_handleSuccess: function _handleSuccess(data) {
		this.setState({
			tweetContent: '',
		});
	},
	_handleSuccessGetTweets: function _handleSuccessGetTweets(data) {
		if (data && data.data) {
			this.setState({
				tweets: data.data,
			});
		}
	},
	_handleError: function _handleError(error) {
		console.error(error);
	},
});

export default Timeline;
