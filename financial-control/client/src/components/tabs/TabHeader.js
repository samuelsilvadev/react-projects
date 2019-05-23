import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const Ul = styled.ul`
	display: flex;
	list-style: none;
	padding: 0;
	margin: 0;
`;

function TabHeader(props) {
	const { children, titlesToHide = [], ...remainingProps } = props;

	const _renderChild = (child) => {
		const isToRender = titlesToHide.indexOf(child.props.id) === -1;

		return isToRender ? child : null;
	}

	return (
		<Ul role="tablist" { ...remainingProps }>
			{
				React.Children.map(children, _renderChild)
			}
		</Ul>
	)
}

TabHeader.propTypes = {
	titlesToHide: PropTypes.arrayOf(PropTypes.string),
};

export default TabHeader;
