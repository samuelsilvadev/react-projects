import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Copy } from '@components/icons';

import { Button, Fieldset, Table, Th, Td, StyledField } from './CreditList.style';

export function CreditList(props) {
	const {
		className,
		readOnly,
		list = [],
		canRenderIfHasNoData = true, 
		onAdd,
	} = props;
	const [internalList, setInternalList] = useState(list);

	useEffect(() => {
		if (canRenderIfHasNoData && list.length === 0) {
			onAdd(0, {});
		}
	}, [])
	
	useEffect(() => {
		setInternalList(list);
	}, [list])

	if (internalList.length === 0) {
		return null;
	}

	const _add = (index, item = {}) => () => {
		if(!readOnly) {
			onAdd(index + 1, item);
		}
	};

	const _renderRows = (item = {}, index) => {
		return (
			<tr key={item._id || index}>
				<Td>
					<StyledField name={`credits[${index}].name`} component="input" readOnly={readOnly} />
				</Td>
				<Td>
					<StyledField name={`credits[${index}].value`} component="input" readOnly={readOnly} />
				</Td>
				<Td hasButtons>
					<Button
						type="button"
						disabled={ readOnly }
						onClick={ _add(index) }
						title="Add new Item">+</Button>
					<Button
						type="button"
						disabled={ readOnly }
						onClick={ _add(index, item) }
						title="Clone this Item">
						<Copy />
					</Button>
					<Button
						type="button"
						disabled={ readOnly }
						title="Remove this Item">-</Button>
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
					{internalList.map(_renderRows)}
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
	onAdd: PropTypes.func,
};

export default CreditList;
