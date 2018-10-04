import React from 'react';
import PropTypes from 'prop-types';

import './Counter.css';

class Counter extends React.Component {
    state = {
        value: this.props.value,
    }

    render() {
        return (
            <div className="counter">
                <span
                    className={this._getBadgeClasses()}>
                    {this._formatCount()}
                </span>
                <button
                    className="btn btn-primary btn-sm"
                    onClick={this._handleClickIncrementBtn}>
                    Increment
                </button>
            </div>
        );
    }

    _handleClickIncrementBtn = () => {
        const { value } = this.state;
        this.setState({
            value: value + 1,
        });
    }

    _formatCount() {
        const { value } = this.state;
        return (value === 0 ? 'Zero' : value);
    }

    _getBadgeClasses() {
        const { value } = this.state;
        return `counter__quantity m-2 badge badge-${value === 0 ? 'warning' : 'success'}`;
    }
}

Counter.propTypes = {
    value: PropTypes.number,
};

Counter.defaultProps = {
    value: 0,
};

export default Counter;