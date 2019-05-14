import React from 'react';
import styled from '@emotion/styled';

const Ul = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

function TabHeader(props) {
	const { children } = props;

	return (
		<Ul role="tablist">
			{ children }
		</Ul>
	)
}

export default TabHeader;
