import React from 'react';
import { connect } from 'react-redux';

import './Counter.css';

const Counter = () => {
    return (
        <div className="counter card">
            <p className="counter__number">0</p>
            <button className="counter__button btn waves-effect waves-light">-</button>
            <button className="counter__button btn waves-effect waves-light">+</button>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        counter: state,
    };
}

export default connect(mapStateToProps)(Counter);