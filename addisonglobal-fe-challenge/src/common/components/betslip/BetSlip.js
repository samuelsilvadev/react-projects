import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { CloseIcon } from '../icons';

import * as betslipActions from '../../store/actions/betslipActions';

import './BetSlip.scss';

const BetSlip = ({ onRemove, onClose, open, bets }) => {
	const handleClickOnRemove = (bet) => {
		return () => onRemove(bet);
	};

	const renderBet = (bet) => (
		<li key={bet.id} className="betSlip__item">
			<h2 className="betSlip__item__title">{bet.name}</h2>
			<span className="betSlip__item__price">{bet.price}</span>
			<button
				className="betSlip__item__button"
				type="button"
				onClick={handleClickOnRemove(bet)}
			>
				Delete
			</button>
		</li>
	);

	return (
		<aside className={`betSlip ${open ? 'betSlip--open' : ''}`}>
			<button className="betSlip__button" type="button" onClick={onClose}>
				<CloseIcon className="betSlip__close-icon" />
			</button>
			<ul className="betSlip__list">{bets.map(renderBet)}</ul>
		</aside>
	);
};

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

const mapStateToProps = (state) => {
	const bets = Object.values(state.betslip).reduce((betsAccumulator, bet) => {
		betsAccumulator.push(bet);
		return betsAccumulator;
	}, []);

	return {
		bets
	};
};

const mapDispatchToProps = {
	onRemove: betslipActions.removeBet
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(BetSlip);
