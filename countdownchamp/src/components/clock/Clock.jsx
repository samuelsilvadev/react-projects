import React from 'react';

import './Clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentDidMount() { }

    render() {
        return (
            <section className="Clock">
                <div className="Clock__days"> {this._formatTextToPlural('day', this.state.days)}</div>
                <div className="Clock__hours">{this._formatTextToPlural('hour', this.state.hours)}</div>
                <div className="Clock__minutes">{this._formatTextToPlural('minute', this.state.minutes)}</div>
                <div className="Clock__seconds">{this._formatTextToPlural('second', this.state.seconds)}</div>
            </section>
        );
    }

    componentWillUnmount() { }

    _formatTextToPlural(str, qtde) {
        return `${qtde} ${(qtde && qtde > 1) ? str + 's' : str}`;
    }
}

export default Clock;