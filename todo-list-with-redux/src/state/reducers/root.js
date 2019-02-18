import { combineReducers } from 'redux';
import reducerTodos from './todos';
import reducerVisibilityFilters from './visibility-filters';

export default combineReducers({
	todos: reducerTodos,
	visibilityFilters: reducerVisibilityFilters,
});
