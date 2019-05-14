import React from 'react';
import styled from '@emotion/styled';

const WrapperDiv = styled.div`
	padding: 10px;
`;

function TabContent(props) {
	const { children, id } = props;

	return (
		<WrapperDiv role="tabpanel" aria-labelledby={ id }>
			{ children }
		</WrapperDiv>
	);
}

export default TabContent;
