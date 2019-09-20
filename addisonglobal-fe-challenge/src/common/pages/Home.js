import React from 'react';

import ConnectedEvents from '../components/events/Events';

import './Home.scss';

const Home = () => (
	<section className="home">
		<h1 className="home__title">Home Page</h1>
		<ConnectedEvents />
	</section>
);

export default Home;
