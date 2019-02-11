import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';

const INCREMENT_TYPE = { type: 'INCREMENT' };
const DECREMENT_TYPE = { type: 'DECREMENT' };

class Counter extends React.PureComponent {
    render() { 
        const { counter } = this.props;

        return (
            <div className="counter card">
                <p className="counter__number">{ counter }</p>
                <button
                    className="counter__button btn waves-effect waves-light"
                    onClick={ this._handleDecrement }>
                    -
                </button>
                <button
                    className="counter__button btn waves-effect waves-light"
                    onClick={ this._handleIncrement }>
                    +
                </button>
            </div>
        );
    }

    _handleIncrement = () => {
        const { dispatch } = this.props; 

        dispatch(INCREMENT_TYPE);
    }

    _handleDecrement = () => {
        const { dispatch } = this.props; 

        dispatch(DECREMENT_TYPE);
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
}

export default connect(mapStateToProps)(Counter);