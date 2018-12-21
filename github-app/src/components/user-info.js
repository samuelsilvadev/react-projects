import React from 'react';
import PropTypes from 'prop-types';

const UserInfo = ({ userInfo }) => (
	<div className='user'>
		<img
			className='user__photo'
			src={userInfo.photo}
			alt={`Profile ${userInfo.userName}`}
		/>
		<div className='user__details'>
			<h1 className='user__name'>
				<a href={`https://github.com/${userInfo.login}`}>
					{userInfo.userName}
				</a>
			</h1>

			<ul className='user__counters'>
				<li>Repos: {userInfo.repos}</li>
				<li>Followers: {userInfo.followers}</li>
				<li>Following: {userInfo.following}</li>
			</ul>
		</div>
	</div>
);

UserInfo.propTypes = {
	userInfo: PropTypes.shape({
		userName: PropTypes.string.isRequired,
		repos: PropTypes.number.isRequired,
		followers: PropTypes.number.isRequired,
		following: PropTypes.number.isRequired,
		photo: PropTypes.string.isRequired,
		login: PropTypes.string.isRequired,
	})
};

export default UserInfo;
