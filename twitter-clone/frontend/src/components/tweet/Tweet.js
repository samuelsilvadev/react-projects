'use strict';

import React from 'react';

import likeSVG from '../../../assets/like.svg';

import './Tweet.css';

const Tweet = function Tweet({ tweet }) {
	return (
		<li className="tweet">
			<strong>{ tweet.author }</strong>
			<p className="tweet__content">{ tweet.content }</p>
			<button className="tweet__button" type="button">
				<img className="tweet__like-img" src={ likeSVG } alt="Like"/>
				{ tweet.likes }
			</button>
		</li>
	);
};

export default Tweet;
