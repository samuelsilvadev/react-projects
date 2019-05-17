import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

function TabHeader(props) {
	const { children, ...remainingProps } = props;

	return (
		<Ul role="tablist" { ...remainingProps }>
			{ children }
		</Ul>
	)
}

export default TabHeader;
