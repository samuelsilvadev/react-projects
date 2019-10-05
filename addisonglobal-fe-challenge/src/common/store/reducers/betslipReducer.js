import { BETSLIP } from '../types/betslipTypes';

const betslipReducer = (state = {}, action) => {
	switch (action.type) {
		case BETSLIP.ADD:
			return { ...state, [action.payload.bet.id]: action.payload.bet };
		case BETSLIP.REMOVE: {
			const {
				[action.payload.bet.id]: betToRemove,
				...remainingBets
			} = state;

			return remainingBets;
		}
		default:
			return state;
	}
};

export default betslipReducer;
