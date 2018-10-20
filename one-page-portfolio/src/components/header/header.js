import React from 'react';

import Button from './../button'
import ProfileImage from './../profile-image'

import srcProfileImage from './../../assets/profileImage.jpg'

import './header.css';

const THEME_PROFILE_IMAGE = {
	wrapper: 'main-header__image',
	image: '',
};

const Header = () => {
	return (
		<header className="main-header">
			<section className="profile">
				<h1 className="main-header__title">Portfolio</h1>
				<ProfileImage src={ srcProfileImage } alt="Profile Image" theme={ THEME_PROFILE_IMAGE } />
				<p className="main-header__sub-title">Be creative</p>
			</section>
			
			<nav className="main-nav">
				<a className="main-nav__link" href="#about">About</a>
				<a className="main-nav__link" href="#portfolio">Portfolio</a>
				<Button>
					Download CV
				</Button>
			</nav>
			
		</header>
	);
}

export default Header;
