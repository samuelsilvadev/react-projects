import { BETSLIP } from '../types/betslipTypes';

export const addBet = (bet = {}) => ({
	type: BETSLIP.ADD,
	payload: {
		bet
	}
});

export const removeBet = (bet = {}) => ({
	type: BETSLIP.REMOVE,
	payload: {
		bet
	}
});
