import React from 'react';
import PropTypes from 'prop-types';

const _handleClick = (callback, page) => (e) => {
	e.preventDefault();

	if (callback && typeof callback === 'function') {
		callback(page);
	}
}

const _isNumber = (value) => typeof value === 'number';

const Page = (props) => {
	const { page, link, onClick } = props;
	const Tag = _isNumber(page) ? 'a' : 'span';
	const href = _isNumber(page) ? link : null;
	const __handleClick = !!onClick && _isNumber(page) ? _handleClick(onClick, page) : null;

	return (
		<Tag href={ href } onClick={ __handleClick }>
			{ page }
		</Tag>
	);
};

Page.defaultProps = {
	link: '#',
};

Page.propTypes = {
	page: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
	]),
	link: PropTypes.string,
	onClick: PropTypes.func,
};

export default Page;
