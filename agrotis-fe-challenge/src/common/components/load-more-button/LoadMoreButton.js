import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Button = styled.button`
	background: none;
	border: none;
	color: #388e3c;
	cursor: pointer;
	font-size: 1.6rem;
	text-decoration: underline;
	margin-bottom: 0.2rem;
`;

const Span = styled.span`
	font-size: 1.3rem;
`;

function LoadMoreButton(props) {
	const { initialCount, maxCount, ...remainingProps } = props;

	const hasCounters =
		typeof initialCount !== 'undefined' && typeof maxCount !== 'undefined';

	return (
		<>
			<Button {...remainingProps}>Load more...</Button>
			{hasCounters && (
				<Span>
					({initialCount} - {maxCount})
				</Span>
			)}
		</>
	);
}

LoadMoreButton.propTypes = {
	initialCount: PropTypes.number,
	maxCount: PropTypes.number
};

export default LoadMoreButton;
