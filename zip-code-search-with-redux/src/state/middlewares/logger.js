export function logger({ dispatch, getState }) {
	return function(next) {
		return function(action) {
			console.group(`LOGGER->${action.type}`);

			console.log('will dipatch:', action);
			console.log('state:', getState());

			const nextAction = next(action);

			console.log('next state:', getState());
			console.groupEnd(`LOGGER->${action.type}`);

			return nextAction;
		};
	};
}
