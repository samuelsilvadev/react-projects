import React from 'react';
import PropTypes from 'prop-types';

import Page from './page';
import paginationGenerator from './paginationGenerator';

const PAGE_REGEX = /%page%/;

class Pagination extends React.Component {
	render() { 
		const { total, active } = this.props;

		return (
			<ul>
				{ paginationGenerator({ total, active }).map(this._renderPage, this) }
			</ul>
		);
	}

	_renderPage(page, index) {
		const { pageLink, onClick } = this.props;

		return (
			<li key={index}>
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
