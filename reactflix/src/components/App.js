import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideosList from './videos-list/VideosList';

import { Title, Header, Main, Footer, P, RegisterVideoButton, RegisterVideoStyled } from './App.style';

import { openRegisterVideoForm, closeRegisterVideoForm, fetchVideos } from '../state/actions-creators';

const App = ({
	isRegisterFormOpened,
	_onOpenRegisterVideoForm,
	_onCloseRegisterVideoForm,
	_fetchVideos,
}) => {
	useEffect(() => {
		_fetchVideos();
	}, []);

	return (
		<Fragment>
			<Header>
				<Title data-enzyme-id="app-title">React Flix</Title>
				<RegisterVideoButton type="button" onClick={ isRegisterFormOpened ? _onCloseRegisterVideoForm : _onOpenRegisterVideoForm }>
					{ isRegisterFormOpened ? 'Close Form' : 'Register a video' }
				</RegisterVideoButton>
			</Header>
			<Main>
				{
					isRegisterFormOpened && <RegisterVideoStyled />
				}
				<VideosList />
			</Main>
			<Footer>
				<P>
					{ new Date().getFullYear() }
				</P>
			</Footer>
		</Fragment>
	);
};

App.defaultProps = {
	isRegisterFormOpened: false,
	_onOpenRegisterVideoForm: () => {},
	_onCloseRegisterVideoForm: () => {},
	_fetchVideos: () => {},
};

App.propTypes = {
	isRegisterFormOpened: PropTypes.bool,
	_onOpenRegisterVideoForm: PropTypes.func,
	_onCloseRegisterVideoForm: PropTypes.func,
	_fetchVideos: PropTypes.func,
};

const mapStateToProps = (state) => ({
	isRegisterFormOpened: state.ui.isRegisterFormOpened,
});

const mapDispatchToProps = (dispatch) => ({
	_onOpenRegisterVideoForm: () => dispatch(openRegisterVideoForm()),
	_onCloseRegisterVideoForm: () => dispatch(closeRegisterVideoForm()),
	_fetchVideos: () => dispatch(fetchVideos()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
