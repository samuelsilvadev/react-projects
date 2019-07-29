import * as React from 'react';
import { connect } from 'react-redux';
import Communications from 'react-native-communications';

import { Card, Button, CardSection, Confirm } from './common';
import EmployeeForm from './EmployeeForm';

import {
	employeeFieldUpdate,
	employeeUpdate,
	employeeReset,
	employeeDelete,
	STATE
} from '../state';

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
	employeeDelete: Function;
	name: string;
	phone: string;
	shift: string;
}

interface EmployeeEditState {
	isConfirmVisible: boolean;
}

class EmployeeEdit extends React.Component<EmployeeEditProps, EmployeeEditState> {
	constructor(props) {
		super(props);

		this.state = {
			isConfirmVisible: false
		};
	}

	componentWillMount() {
		const { employeeFieldUpdate, employee } = this.props;

		Object.entries(employee).forEach(([prop, value]) => employeeFieldUpdate(prop, value));
	}

	componentWillUnmount() {
		this.props.employeeReset();
	}

	render() {
		const { isConfirmVisible } = this.state;

		return (
			<Card>
				<EmployeeForm {...this.props} />
				<CardSection>
					<Button text="Save" onPress={this._handleOnButtonPress} />
					<Button text="Text Schedule" onPress={this._handleOnTextPress} />
				</CardSection>
				<CardSection>
					<Button text="Fire Emplyee" onPress={this._handleOnToggleFirePress} />
				</CardSection>
				<Confirm
					isVisible={isConfirmVisible}
					onAccept={this._handleOnAccept}
					onDecline={this._handleOnToggleFirePress}>
					Are you sure you want delete this?
				</Confirm>
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

	_handleOnTextPress = () => {
		const { phone, shift } = this.props;

		Communications.text(phone, `Your upcoming shif is ${shift}`);
	};

	_handleOnToggleFirePress = () => {
		this.setState(oldState => ({ isConfirmVisible: !oldState.isConfirmVisible }));
	};

	_handleOnAccept = () => {
		const {
			employee: { uid },
			employeeDelete
		} = this.props;

		this._handleOnToggleFirePress();
		employeeDelete({ uid });
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
	employeeUpdate,
	employeeDelete
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(EmployeeEdit);
