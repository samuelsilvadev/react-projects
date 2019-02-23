const createReducer = (initialState, actionsMap = {}) => {
	return (state = initialState, action = {}) => {
		if (actionsMap.hasOwnProperty(action.type)) {
			return actionsMap[action.type](state, action);
		}

		return state;
	}
};

export default createReducer;
