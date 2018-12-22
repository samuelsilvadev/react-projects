import React from 'react';
import PropTypes from 'prop-types';

import Pagination from './pagination';

function _renderListItem(repository) {
    return (
        <li className="repos__item" key={repository.name} >
            <a target="_blank" rel="noopener noreferrer" href={repository.html_url}>
                {repository.name}
            </a>
        </li>
    );
}

const Repos = ({ className, title, repos, handlePagination }) => {
	const reposLength = repos.repos.length;

    return (
		<div className={className}>
			<h2>{title}</h2>
			<ul className="repos">
				{
					repos.repos.map(_renderListItem)
				}
			</ul>
			{ reposLength &&
				<Pagination active={ repos.activePage } total={ repos.totalPages } onClick={handlePagination} />}
		</div>
	);
};

Repos.defaultProps = {
    className: '',
	repos: {},
};

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    repos: PropTypes.object,
    handlePagination: PropTypes.func
};

export default Repos;
