import React from 'react';
import PropTypes from 'prop-types';

import { GridDiv, StyledValueBox } from './Summary.style';

export function Summary(props) {
	const { credit = 0, debt = 0, className } = props;

	return (
		<GridDiv className={ className }>
			<StyledValueBox type="credit" title={ `$ ${credit}` } text="Credits Total"/>
			<StyledValueBox type="debit" title={ `$ ${debt}` } text="Debts Total"/>
			<StyledValueBox type="consolidated" title={ `$ ${credit - debt}` } text="Consolidated Value"/>
		</GridDiv>
	);
}

Summary.propTypes = {
	className: PropTypes.string,
	credit: PropTypes.number,
	debt: PropTypes.number
};

export default Summary;
