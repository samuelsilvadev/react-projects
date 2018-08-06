import React from 'react';

import './Clock.css'

class Clock extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            deadline: '',
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    }

    componentWillMount() {
        this.setState(this._getTimeUntil(this.props.deadline));
    }

    componentDidMount() {
        setInterval(() => this.setState(this._getTimeUntil(this.props.deadline)), 1000);
    }

    render() {
        return (
            <section className="Clock">
                <div className="Clock__days">{this._formatTextToPlural('day', this.state.days)}</div>
                <div className="Clock__hours">{this._formatTextToPlural('hour', this.state.hours)}</div>
                <div className="Clock__minutes">{this._formatTextToPlural('minute', this.state.minutes)}</div>
                <div className="Clock__seconds">{this._formatTextToPlural('second', this.state.seconds)}</div>
            </section>
        );
    }

    _getTimeUntil(deadline) {

        if (!deadline) { return; }

        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor(time / (1000 * 60 * 60) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        return {
            seconds,
            minutes,
            hours,
            days
        }
    }

    _formatTextToPlural(str = '', qtde = 0) {
        return `${(qtde < 10 && qtde > 0 ) ? ('0' + qtde) : qtde } ${(qtde > 1) ? str + 's' : str}`;
    }
}

export default Clock;