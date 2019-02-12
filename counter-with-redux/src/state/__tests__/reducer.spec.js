import reducer from './../reducer';

describe('Counter Reducer', () => {
    it(' `reducer` should be a fuction', () => {
        expect(typeof reducer).toBe('function');
    });

    it(' `reducer` should not break if nothing be passed', () => {
        const result = reducer();

        expect(result).toBe(0);
    });

    it(' `reducer` should not break if an `action type` not be passed', () => {
        const result = reducer(1);

        expect(result).toBe(1);
    });

    it(' `reducer` should return the same state if the action is unknown', () => {
        const actionType = { type: 'UNKNOWN' };
        const initialState = 1;
        const result = reducer(initialState, actionType);

        expect(result).toBe(initialState);
    });

    it(' `reducer` should return a new state if `INCREMENT` be passed', () => {
        const actionType = { type: 'INCREMENT' };
        const initialState = 0;
        const result = reducer(initialState, actionType);

        expect(result).toBe(1);
    });

    it(' `reducer` should return a new state if `DECREMENT` be passed', () => {
        const actionType = { type: 'DECREMENT' };
        const initialState = 0;
        const result = reducer(initialState, actionType);

        expect(result).toBe(-1);
    });
});
