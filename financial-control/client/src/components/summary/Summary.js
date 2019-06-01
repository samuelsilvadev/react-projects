import React from 'react';
import PropTypes from 'prop-types';

import { GridDiv, StyledValueBox } from './Summary.style';

export function Summary(props) {
	const { credit = 0, debt = 0 } = props;

	return (
		<GridDiv>
			<StyledValueBox type="credit" title={ `$ ${credit}` } text="Credits Total"/>
			<StyledValueBox type="debit" title={ `$ ${debt}` } text="Debts Total"/>
			<StyledValueBox type="consolidated" title={ `$ ${credit - debt}` } text="Consolidated Value"/>
		</GridDiv>
	);
}

Summary.propTypes = {
	credit: PropTypes.number,
	debt: PropTypes.number
};

export default Summary;
