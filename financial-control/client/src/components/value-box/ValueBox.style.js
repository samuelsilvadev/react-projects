import styled from '@emotion/styled';

export const H3 = styled.h3`
	font-size: 30px;
`;

export const P = styled.p`
	font-size: 20px;
`;

export const WrapperDiv = styled.div`
	color: #fff;
	display: flex;
	padding: 10px;
`;

export const ContentDiv = styled.div`
	align-items: center;
	display: flex;
	flex-wrap: wrap;
	width: 80%;

	& ${H3} {
		width: 100%;
	}
`;

export const IconWrapperDiv = styled.div`
	flex-shrink: 0;
`;
