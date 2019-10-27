import React from 'react';
import styled from 'styled-components';

import { MagnifierGlass, DocumentList, LoadMoreButton } from '../components';
import { gteSmallMedia } from '../media.style';

import * as mockData from './home.data';

const TopBarDiv = styled.div`
	align-items: center;
	background-color: #004d40;
	color: #fff;
	display: flex;
	flex-direction: column;
	height: 12rem;
	justify-content: space-around;
	padding: 0 2.5rem;

	${gteSmallMedia} {
		height: 7rem;
		flex-direction: row;
		justify-content: space-between;
	}
`;

const ContentDiv = styled.div`
	align-items: center;
	background-color: #fff;
	box-shadow: -1px 0 0.5rem 0 #ecf0f1;
	display: flex;
	flex-direction: column;
	height: 70vh;
`;

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

function Home() {
	const handleSubmit = (event) => {
		event.preventDefault();
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
			</ContentDiv>
		</section>
	);
}

export default Home;
