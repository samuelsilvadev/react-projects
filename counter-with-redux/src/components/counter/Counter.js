import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';

const INCREMENT_TYPE = { type: 'INCREMENT' };
const DECREMENT_TYPE = { type: 'DECREMENT' };

const Counter = ({ counter, increment, decrement }) => {
    return (
        <div className="counter card">
            <p className="counter__number">{ counter }</p>
            <button
                className="counter__button btn waves-effect waves-light"
                onClick={ decrement }>
                -
            </button>
            <button
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
    increment: () => dispatch(INCREMENT_TYPE),
    decrement: () => dispatch(DECREMENT_TYPE),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);