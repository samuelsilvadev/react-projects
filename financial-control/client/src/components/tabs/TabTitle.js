import React from 'react';
import styled from '@emotion/styled';

import { useTabs } from '@shared/context';

const Li = styled.li`
	margin-left: 3px;
`;

const Button = styled.button`
	border: none;
	cursor: pointer;
	padding: 10px;

	:focus {
		outline-width: 1.5px;
	}
`;

function TabTitle(props) {
	const { id, label } = props;
	const { selected, setSelected } = useTabs();
	const isSelected = id === selected;

	return (
		<Li role="presentation">
			<Button
				role="tab"
				aria-selected={ isSelected }
				onClick={ () => setSelected(id) }>{ label }</Button>
		</Li>
	)
}

export default TabTitle;
