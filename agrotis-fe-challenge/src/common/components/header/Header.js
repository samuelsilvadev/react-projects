import React from 'react';
import styled from 'styled-components';

import agrotisBrand from '../../images/agrotis.png';

export const HEADER_HEIGHT = '70px';

const StyledHeader = styled.header`
	align-items: center;
	display: flex;
	border-bottom: 1px solid #000;
	height: ${HEADER_HEIGHT};
	width: 100%;
`;

const Img = styled.img`
	margin-left: 50px;
	width: 120px;
`;

function Header() {
	return (
		<StyledHeader>
			<Img src={agrotisBrand} alt="Brand from Agrotis" />
		</StyledHeader>
	);
}

export default Header;
