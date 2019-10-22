import React from 'react';
import styled from 'styled-components';

const TopBarDiv = styled.div`
	align-items: center;
	background-color: #004d40;
	color: #fff;
	display: flex;
	height: 7rem;
	justify-content: space-between;
	padding: 0 4rem;
`;

const ContentDiv = styled.div`
	background-color: #fff;
	box-shadow: -1px 0 0.5rem 0 #ecf0f1;
	height: 70vh;
`;

function Home() {
	return (
		<section>
			<TopBarDiv>
				<h1>Document State</h1>
				<form>
					<input type="search" name="searchByName" />
				</form>
			</TopBarDiv>
			<ContentDiv />
		</section>
	);
}

export default Home;
