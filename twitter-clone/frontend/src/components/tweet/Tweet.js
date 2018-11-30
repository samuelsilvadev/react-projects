'use strict';

import React from 'react';

import { API } from '../../services';

import likeSVG from '../../../assets/like.svg';

import './Tweet.css';

const Tweet = React.createClass({
	render: function render() {
		const { tweet } = this.props;

		return (
			<li className="tweet">
				<strong>{ tweet.author }</strong>
				<p className="tweet__content">{ tweet.content }</p>
				<button className="tweet__button" type="button" onClick={ this._likeTweet(tweet) }>
					<img className="tweet__like-img" src={ likeSVG } alt="Like"/>
					{ tweet.likes }
				</button>
			</li>
		);
	},
	_likeTweet: function _likeTweet(tweet) {
		const { _handleError } = this.props;

		return function () {
			API.post(`likes/${tweet._id}`)
				.then()
				.catch(_handleError);
		};
	},
});

export default Tweet;
