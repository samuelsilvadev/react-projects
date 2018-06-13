import React from 'react';

const UserInfo = () => (
    <div className="user">
        <img className="user__photo" src="https://avatars3.githubusercontent.com/u/13966565?v=4" alt="Profile Samuel Silva" />
        <div className="user__details">
            <h1 className="user__name">
                <a href="https://github.com/samuelsilvadev">
                    Samuel Silva
            </a>
            </h1>

            <ul className="user__counters">
                <li>Repos: 200</li>
                <li>Followers: 10</li>
                <li>Following: 20</li>
            </ul>
        </div>
    </div>
);

export default UserInfo;

