export function logger({ dispatch, getState }) {
	return function(next) {
		return function(action) {
			const loggerName = isFunction(action) ? action.name : action.type;

			console.group(`LOGGER->${loggerName}`);

			console.log('will dipatch:', action);
			console.log('state:', getState());

			const nextAction = next(action);

			console.log('next state:', getState());
			console.groupEnd(`LOGGER->${loggerName}`);

			return nextAction;
		};
	};
}

function isFunction(something) {
	return typeof something === 'function';
}
