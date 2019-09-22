import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Event from './Event';

import * as actions from '../../store/actions/eventsActions';

export const Events = ({ fetchEvents, events }) => {
	useEffect(() => {
		fetchEvents();
	}, []);

	return events.map((event) => <Event key={event.id} {...event} />);
};

Events.propTypes = {
	fetchEvents: PropTypes.func.isRequired,
	events: PropTypes.arrayOf(PropTypes.shape({}))
};

Events.defaultProps = {
	events: []
};

const mapStateToProps = ({ events = {} }) => ({
	events: events.result || []
});

const mapDispatchToProps = {
	fetchEvents: actions.fetchEvents
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Events);
