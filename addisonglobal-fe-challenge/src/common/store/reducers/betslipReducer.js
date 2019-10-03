import { BETSLIP } from '../types/betslipTypes';

const betslipReducer = (state = [], action) => {
	switch (action.type) {
		case BETSLIP.ADD:
			return [...state, action.payload.bet];
		case BETSLIP.REMOVE:
			return state.filter((bet) => bet.id !== action.payload.bet.id);
		default:
			return state;
	}
};

export default betslipReducer;
