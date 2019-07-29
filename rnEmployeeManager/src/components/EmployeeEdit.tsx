import * as React from 'react';
import { connect } from 'react-redux';

import { Card, Button, CardSection } from './common';
import EmployeeForm from './EmployeeForm';

import { employeeFieldUpdate, employeeUpdate, employeeReset, STATE } from '../state';

interface Employee {
	uid: string;
	name: string;
	phone: string;
	shift: string;
}

export interface EmployeeEditProps {
	/**
	 * This prop will came from the route.
	 */
	employee: Employee;
	employeeFieldUpdate: Function;
	employeeReset: Function;
	employeeUpdate: Function;
	name: string;
	phone: string;
	shift: string;
}

class EmployeeEdit extends React.Component<EmployeeEditProps> {
	componentWillMount() {
		const { employeeFieldUpdate, employee } = this.props;

		Object.entries(employee).forEach(([prop, value]) => employeeFieldUpdate(prop, value));
	}

	componentWillUnmount() {
		this.props.employeeReset();
	}

	render() {
		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button text="Save" onPress={this._handleOnButtonPress} />
					<Button text="Delete" onPress={this._handleOnButtonPress} />
				</CardSection>
			</Card>
		);
	}

	_handleOnButtonPress = () => {
		const {
			name,
			phone,
			shift,
			employee: { uid },
			employeeUpdate
		} = this.props;

		employeeUpdate({ name, phone, shift, uid });
	};
}

const mapStateToProps = ({ employeeForm: { name, phone, shift } }: STATE) => ({
	name,
	phone,
	shift
});

const mapDispatchToProps = {
	employeeFieldUpdate,
	employeeReset,
	employeeUpdate
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmployeeEdit);
