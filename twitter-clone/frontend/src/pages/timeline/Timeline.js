'use strict';

import React from 'react';

import CONSTANTS from '../../constants';
import { API } from '../../services';

import { Logo } from '../../components';

import './Timeline.css';

const ENTER = 13;

const Timeline = React.createClass({
	getInitialState: function getInitialState() {
		return {
			tweet: '',
		};
	},
	render: function render() {
		return (
			<div className="timeline-wrapper">
				<Logo className="timeline__logo"/>
				<form className="timeline__form">
					<textarea
						className="timeline__form__textarea"
						value={this.state.tweet}
						onChange={this._handleTextareaChange}
						onKeyDown={this._handleKeyDown}/>
				</form>
			</div>
		);
	},
	_handleTextareaChange: function _handleTextareaChange(event) {
		this.setState({
			tweet: event.target.value,
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
		const { tweet: content } = this.state;
		const author = window.localStorage.getItem(storage.username);

		API.post('tweets', { author, content })
			.then(_handleSuccess)
			.catch(_handleError);
	},
	_handleSuccess: function _handleSuccess(data) {
		this.setState({
			tweet: '',
		});
	},
	_handleError: function _handleError(error) {
		console.error(error);
	},
});

export default Timeline;
