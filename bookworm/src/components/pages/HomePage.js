import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => (
    <div>
        <div>Home Page</div>
        <Link to="/login">Login</Link>
    </div>
);

export default HomePage;