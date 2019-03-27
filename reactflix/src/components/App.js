import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import VideosList from './videos-list/VideosList';

import { Title, Header, Main, Footer, P, RegisterVideoButton, RegisterVideoStyled } from './App.style';

import { openRegisterVideoForm, closeRegisterVideoForm } from '../state/actions-creators';

const App = ({
	isRegisterFormOpened,
	onOpenRegisterVideoForm,
	onCloseRegisterVideoForm,
}) => (
	<Fragment>
		<Header>
			<Title data-enzyme-id="app-title">React Flix</Title>
			<RegisterVideoButton type="button" onClick={ isRegisterFormOpened ? onCloseRegisterVideoForm : onOpenRegisterVideoForm }>
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

App.defaultProps = {
	isRegisterFormOpened: false,
	onOpenRegisterVideoForm: () => {},
	onCloseRegisterVideoForm: () => {},
};

App.propTypes = {
	isRegisterFormOpened: PropTypes.bool,
	onOpenRegisterVideoForm: PropTypes.func,
	onCloseRegisterVideoForm: PropTypes.func,
};

const mapStateToProps = (state) => ({
	isRegisterFormOpened: state.ui.isRegisterFormOpened,
});

const mapDispatchToProps = (dispatch) => ({
	onOpenRegisterVideoForm: () => dispatch(openRegisterVideoForm()),
	onCloseRegisterVideoForm: () => dispatch(closeRegisterVideoForm()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
