import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import {
	MagnifierGlass,
	Plus,
	DocumentList,
	LoadMoreButton
} from '../components';
import { TopBarDiv, ContentDiv } from './Template';
import { gteSmallMedia } from '../media.style';

import * as mockData from './home.data';

const Form = styled.form`
	display: flex;
	height: 4rem;
	width: 100%;

	${gteSmallMedia} {
		width: 32rem;
	}
`;

const Input = styled.input`
	border: none;
	font-size: 1.6rem;
	height: 100%;
	padding-left: 0.5rem;
	width: 100%;
	order: 1;
`;

const Button = styled.button`
	background: #fff;
	border: none;
	cursor: pointer;
	height: 100%;
	width: 5rem;
`;

const StyledMagnifierGlass = styled(MagnifierGlass)`
	padding: 1rem;
	height: 100%;
	width: 100%;
`;

const StyledPlusIcon = styled(Plus)`
	fill: #fff;
	padding: 1.3rem;
	height: 100%;
	width: 100%;
`;

const NewRegistryButton = styled.button`
	background-color: #b45f04;
	border: none;
	border-radius: 100%;
	bottom: 0;
	cursor: pointer;
	height: 5rem;
	right: 2rem;
	position: absolute;
	transform: translateY(50%);
	width: 5rem;
`;

function Home(props) {
	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleNewRegisterClick = () => {
		props.history.push('register');
	};

	return (
		<section>
			<TopBarDiv>
				<h1>Document State</h1>
				<Form onSubmit={handleSubmit}>
					<Input
						type="search"
						name="searchByName"
						placeholder="Search by name"
					/>
					<Button aria-label="Search">
						<StyledMagnifierGlass />
					</Button>
				</Form>
			</TopBarDiv>
			<ContentDiv>
				<DocumentList documents={mockData.documentList} />
				{
					// - initialCount is the amount of loaded documents
					// - maxCount is the amount of documents that
					// need to be loaded.
					// - after load everything we need to hide the
					// LoadMoreButton
				}
				<LoadMoreButton
					initialCount={mockData.documentList.length}
					maxCount={10}
				/>
				<NewRegistryButton
					onClick={handleNewRegisterClick}
					aria-label="Add new document"
				>
					<StyledPlusIcon />
				</NewRegistryButton>
			</ContentDiv>
		</section>
	);
}

Home.propTypes = {
	history: PropTypes.shape({
		push: PropTypes.func
	})
};

export default Home;
