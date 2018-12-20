import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Page from './page';
import paginationGenerator from './paginationGenerator';

import './pagination.css';

const PAGE_REGEX = /%page%/;

class Pagination extends React.Component {
	render() { 
		const { total, active } = this.props;

		return (
			<ul className="pagination">
				{ paginationGenerator({ total, active }).map(this._renderPage, this) }
			</ul>
		);
	}

	_renderPage(page, index) {
		const { pageLink, onClick, active } = this.props;
		const isActive = page === active;

		return (
			<li key={index} className={ classnames('pagination__item', {'pagination__item--active': isActive }) }>
				<Page
					page={page}
					link={ pageLink.replace(PAGE_REGEX, page) }
					onClick={ onClick } />
			</li>
		);
	};
}

Pagination.defaultProps = {
	pageLink: '',
};

Pagination.propTypes = {
	total: PropTypes.number,
	active: PropTypes.number,
	pageLink: PropTypes.string,
	onClick: PropTypes.func,
};

export default Pagination;
