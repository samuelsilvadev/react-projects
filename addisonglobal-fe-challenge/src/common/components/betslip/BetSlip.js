import React from 'react';
import PropTypes from 'prop-types';

import { CloseIcon } from '../icons';

import './BetSlip.scss';

const BetSlip = ({ onClose, open }) => (
	<aside className={`betSlip ${open ? 'betSlip--open' : ''}`}>
		<button className="betSlip__button" type="button" onClick={onClose}>
			<CloseIcon className="betSlip__close-icon" />
		</button>
	</aside>
);

BetSlip.propTypes = {
	bets: PropTypes.arrayOf(PropTypes.object),
	onRemove: PropTypes.func.isRequired,
	onClose: PropTypes.func.isRequired,
	open: PropTypes.bool
};

BetSlip.defaultProps = {
	bets: [],
	open: false
};

export default BetSlip;
