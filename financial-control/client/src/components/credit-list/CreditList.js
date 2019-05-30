import React from 'react';

import { Button, Fieldset, Table, Th, Td, StyledField } from './CreditList.style';

export function CreditList(props) {
	const { className, readOnly } = props;

	const _renderRows = () => {
		return (
			<tr>
				<Td>
					<StyledField name="credits[0].name" component="input" readOnly={ readOnly } />
				</Td>
				<Td>
					<StyledField name="credits[0].value" component="input" readOnly={ readOnly } />
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
		<Fieldset className={ className }>
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
					{_renderRows()}
				</tbody>
			</Table>
		</Fieldset>
	)
}

export default CreditList;
