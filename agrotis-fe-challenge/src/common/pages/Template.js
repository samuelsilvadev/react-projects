import styled from 'styled-components';

import { gteSmallMedia } from '../media.style';

export const TopBarDiv = styled.div`
	align-items: center;
	background-color: #004d40;
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 12rem;
	justify-content: space-around;
	padding: 0 2.5rem;

	${gteSmallMedia} {
		height: 7rem;
		flex-direction: row;
		justify-content: space-between;
	}
`;

export const ContentDiv = styled.div`
	align-items: center;
	background-color: #fff;
	box-shadow: -1px 0 0.5rem 0 #ecf0f1;
	display: flex;
	flex-direction: column;
	height: 70vh;
	position: relative;
	padding: 0 2.5rem;
`;
