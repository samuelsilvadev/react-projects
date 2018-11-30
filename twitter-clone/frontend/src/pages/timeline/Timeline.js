'use strict';

import React from 'react';
import socket from 'socket.io-client';

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

		this._subscribeToEvents();
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
	_subscribeToEvents: function _subscribeToEvents() {
		const io = socket(process.env.BASE_URL);

		io.on('tweet', this._ioNewTweet);
		io.on('like', this._ioLike);
	},
	_ioNewTweet: function _ioNewTweet(data) {
		this.setState((prevState) => {
			return {
				tweets: [
					data,
					...prevState.tweets,
				],
			};
		});
	},
	_ioLike: function _ioLike(data) {
		this.setState((prevState) => {
			return {
				tweets: prevState.tweets.map((tweet) => {
					if (tweet._id === data._id) {
						return data;
					}

					return tweet;
				}),
			};
		});
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
