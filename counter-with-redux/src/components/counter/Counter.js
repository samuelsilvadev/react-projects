import React from 'react';
import { connect } from 'react-redux';

import { INCREMENT, DECREMENT } from './../../state/types';

import './Counter.css';

export const Counter = ({ counter, increment, decrement }) => {
    return (
        <div className="counter card">
            <p data-enzyme-id="counter" className="counter__number">{ counter }</p>
            <button
                data-enzyme-id="counter-decrement-button"
                className="counter__button btn waves-effect waves-light"
                onClick={ decrement }>
                -
            </button>
            <button
                data-enzyme-id="counter-increment-button"
                className="counter__button btn waves-effect waves-light"
                onClick={ increment }>
                +
            </button>
        </div>
    ); 
};

const mapStateToProps = (state) => ({
    counter: state,
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch({ type: INCREMENT }),
    decrement: () => dispatch({ type: DECREMENT }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);