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
	};

	_renderPage(page, index) {
		const { pageLink, active } = this.props;
		const isActive = page === active;

		return (
			<li key={index} className={ classnames('pagination__item', {'pagination__item--active': isActive }) }>
				<Page
					page={page}
					link={pageLink.replace(PAGE_REGEX, page)}
					onClick={this._handleClick} />
			</li>
		);
	};

	_handleClick = (page) => {
		const { onClick } = this.props;

		onClick && onClick(page)
	};
}

Pagination.defaultProps = {
	pageLink: '',
	active: 1,
};

Pagination.propTypes = {
	total: PropTypes.number,
	active: PropTypes.number,
	pageLink: PropTypes.string,
	onClick: PropTypes.func,
};

export default Pagination;
