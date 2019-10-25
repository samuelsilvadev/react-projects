import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { gteSmallMedia } from '../../media.style';

const Ul = styled.ul`
	list-style: none;
	padding: 2rem;
`;

const Li = styled.li`
	border: 0.1rem solid #ccc;
	border-radius: 0.5rem;
	display: flex;
	flex-direction: column;
	padding: 2rem;

	&:not(:last-of-type) {
		margin-bottom: 1.5rem;
	}

	${gteSmallMedia} {
		flex-direction: row;
	}
`;

const Div = styled.div`
	width: ${({ width }) => width};
`;

const Span = styled.span`
	color: #9f9f9f;
`;

const StrongSpan = styled.span`
	display: inline-block;
	font-weight: bold;
`;

function DocumentList(props) {
	const { documents = [] } = props;

	const renderListItem = (document, key) => {
		const { name, description } = document;

		return (
			<Li key={key}>
				<Div width="35rem">
					<Span>Name: </Span>
					<StrongSpan>{name}</StrongSpan>
				</Div>
				<Div>
					<Span>Description: </Span>
					<StrongSpan>{description}</StrongSpan>
				</Div>
			</Li>
		);
	};

	return <Ul>{documents.map(renderListItem)}</Ul>;
}

DocumentList.propTypes = {
	documents: PropTypes.arrayOf(PropTypes.object)
};

export default DocumentList;
