import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { Form, Button, Input } from './RegisterVideo.style';

import { registerVideo as registerVideoActionCreator } from '../../state/actions-creators';

const RegisterVideo = ({ className, registerVideo, ...restProps }) => {
	const _handleSubmit = async (event) => {
		event.preventDefault();
		event.persist();

		const id = event.target.videoId.value;
		const title = event.target.videoTitle.value;
	
		await registerVideo({ id, title });
	
		event.target.reset();
		event.target[0].focus();
	};

	return (
		<Form className={ className } onSubmit={ _handleSubmit } { ...restProps }>
			<h2>Video Register</h2>

			<label htmlFor="videoId">Video ID</label>
			<Input id="videoId" type="text" name="videoId" required />

			<label htmlFor="videoTitle">Video Title</label>
			<Input id="videoTitle" type="text" name="videoTitle" required />

			<Button type="submit">Save</Button>
		</Form>
	);
};

RegisterVideo.defaultProps = {
	className: '',
};

RegisterVideo.propTypes = {
	className: PropTypes.string,
	registerVideo: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
	registerVideo: ({ id, title }) => dispatch(registerVideoActionCreator({ id, title })),
});

export default connect(null, mapDispatchToProps)(RegisterVideo);
