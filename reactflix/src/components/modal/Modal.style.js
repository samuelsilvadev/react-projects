import styled from '@emotion/styled';

import Close from '../icons/Close';

import { WHITE , MODAL, TRANSPARENT_BLACK } from '../style';

export const Container = styled.div`
	background-color: ${TRANSPARENT_BLACK};
	position: fixed;
	top: 0;
	left: 0;
	height: 100vh;
	width: 100%;
	z-index: ${MODAL};
`;

export const CloseStyled = styled(Close)`
	cursor: pointer;
	fill: ${WHITE};
	position: absolute;
	top: 10px;
	right: 10px;
`;

export default Container;
