import React from 'react';
import PropTypes from 'prop-types';
import Counter from './Counter';

class CounterContainer extends React.Component {
    render() { 
        const { counters } = this.props;
        return ( 
            counters.map(this._renderCounter)
        );
    }

    _renderCounter(data, key) {
        const { value, className } = data;
        return <Counter key={key} value={value} className={className} />;
    }
};

CounterContainer.propTypes = {
    counters: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number,
            className: PropTypes.string,
        })
    ),
};

CounterContainer.defaultProps = {
    counters: [],
};
 
export default CounterContainer;
