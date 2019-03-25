import React from 'react';

import { Form, Button, Input } from './RegisterVideo.style';

const RegisterVideo = () => {
	return (
		<Form>
			<h2>Video Register</h2>

			<label htmlFor="videoId">Video ID</label>
			<Input id="videoId" type="text" name="videoId" required />

			<label htmlFor="videoTitle">Video Title</label>
			<Input id="videoTitle" type="text" name="videoTitle" required />

			<Button type="submit">Save</Button>
		</Form>
	);
};

export default RegisterVideo;
