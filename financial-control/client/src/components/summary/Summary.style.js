import styled from '@emotion/styled';

import ValueBox from '@components/value-box';

const valueBoxesColors = {
	credit: '#00d200',
	debit: '#ff4e4e',
	consolidated: '#3c3cff',
};

export const H1 = styled.h1`
	margin-bottom: 20px;
`;

export const GridDiv = styled.div`
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: repeat(3, 100px);
	grid-gap: 30px;

	@media(min-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: 100px;
	}
`;

export const StyledValueBox = styled(ValueBox)`
	background-color: ${(props) => valueBoxesColors[props.type]};
`
