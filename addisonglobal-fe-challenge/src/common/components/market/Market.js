import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { useAsideContext } from '../../contexts/AsideContext';

import * as betslipActions from '../../store/actions/betslipActions';

import './Market.scss';

export const Market = ({ name, selections, addBet, removeBet, betslip }) => {
	const { handleOpen } = useAsideContext();

	const handleClick = (bet) => () => {
		const isInBetslip = betslip[bet.id];

		if (!isInBetslip) {
			addBet(bet);
			handleOpen();

			return;
		}

		removeBet(bet);
	};

	const renderButton = (selection) => {
		const isInBetslip = betslip[selection.id];

		const classNames = `market__btn ${
			isInBetslip ? 'market__btn--active' : ''
		}`;

		return (
			<button
				className={classNames}
				key={selection.id}
				type="button"
				onClick={handleClick(selection)}
			>
				<span>{selection.name}</span>
				<span>{selection.price}</span>
			</button>
		);
	};

	return (
		<section className="market">
			<h4 className="market__title">{name}</h4>
			<div className="market__selections-wrapper">
				{selections.map(renderButton)}
			</div>
		</section>
	);
};

Market.propTypes = {
	name: PropTypes.string.isRequired,
	selections: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number
		})
	),
	addBet: PropTypes.func.isRequired,
	removeBet: PropTypes.func.isRequired,
	betslip: PropTypes.shape({
		key: PropTypes.shape({
			id: PropTypes.string,
			name: PropTypes.string,
			price: PropTypes.number
		})
	})
};

Market.defaultProps = {
	selections: [],
	betslip: {}
};

const mapStateToProps = (state) => ({
	betslip: state.betslip
});

const mapDispatchToProps = {
	addBet: betslipActions.addBet,
	removeBet: betslipActions.removeBet
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Market);
