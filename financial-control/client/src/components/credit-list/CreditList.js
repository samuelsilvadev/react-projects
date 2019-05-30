import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Button, Fieldset, Table, Th, Td, StyledField } from './CreditList.style';

export function CreditList(props) {
	const { className, readOnly, list = [], canRenderIfHasNoData = true } = props;
	const [_list, setList] = useState(list);

	useEffect(() => {
		if (canRenderIfHasNoData && _list.length === 0) {
			setList([{}])
		}
	}, [_list, canRenderIfHasNoData]);

	if (_list.length === 0) {
		return null;
	}

	const _renderRows = (item, index) => {
		return (
			<tr key={item._id || index}>
				<Td>
					<StyledField name={`credits[${index}].name`} component="input" readOnly={readOnly} />
				</Td>
				<Td>
					<StyledField name={`credits[${index}].value`} component="input" readOnly={readOnly} />
				</Td>
				<Td hasButtons>
					<Button disabled>1</Button>
					<Button disabled>2</Button>
					<Button disabled>3</Button>
				</Td>
			</tr>
		);
	};

	return (
		<Fieldset className={className}>
			<legend>Credits</legend>
			<Table>
				<thead>
					<tr>
						<Th>Name</Th>
						<Th>Value</Th>
						<Th>Actions</Th>
					</tr>
				</thead>
				<tbody>
					{_list.map(_renderRows)}
				</tbody>
			</Table>
		</Fieldset>
	)
}

CreditList.propTypes = {
	className: PropTypes.string,
	readOnly: PropTypes.bool,
	list: PropTypes.array,
	/**
	 * This prop is to be used when you wanna change the component's default
	 * behaviour that add a empty line in its initilization.
	*/
	canRenderIfHasNoData: PropTypes.bool,
};

export default CreditList;
