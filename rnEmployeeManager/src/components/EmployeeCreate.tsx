import * as React from 'react';
import { connect } from 'react-redux';

import { Card, Button, CardSection } from './common';
import EmployeeForm, { WEEK_DAYS } from './EmployeeForm';

import { employeeCreate, STATE } from './../state';

export interface EmployeeCreateProps {
	name: string;
	phone: string;
	shift: string;
	employeeCreate: Function;
};

class EmployeeCreate extends React.Component<EmployeeCreateProps> {
	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button text="Create" onPress={this._handleOnButtonPress} />
				</CardSection>
			</Card>
		);
	}

	_handleOnButtonPress = () => {
		const { name, phone, shift, employeeCreate } = this.props;

		employeeCreate({ name, phone, shift: shift || WEEK_DAYS[0] })
	}
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }: STATE) => ({
	name,
	phone,
	shift
});

export default connect(mapStateToProps, { employeeCreate })(EmployeeCreate);
