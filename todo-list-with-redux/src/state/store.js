import { createStore } from 'redux';
import todos from './reducer';

export const store = createStore(todos);
