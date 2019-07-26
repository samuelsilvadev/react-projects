import * as React from 'react';
import { connect } from 'react-redux';
import { Picker, StyleSheet, Text } from 'react-native';

import { Card, CardSection, Input } from './common';

import { employeeFieldUpdate, STATE } from './../state';

export interface EmployeeFormProps {
	name: string;
	phone: string;
	shift: string;
	employeeFieldUpdate: Function;
};

export const WEEK_DAYS = [
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
	'Sunday',
];

class EmployeeForm extends React.Component<EmployeeFormProps> {
	render() {
		const { name, phone, shift } = this.props;

		return (
			<Card>
				<CardSection>
					<Input
						label="Name"
						placeholder="Name"
						value={name}
						onChangeText={this._handleFieldChange('name')} />
				</CardSection>
				<CardSection>
					<Input
						label="Phone"
						placeholder="555-555-5555"
						value={phone}
						onChangeText={this._handleFieldChange('phone')} />
				</CardSection>
				<CardSection style={styles.pickerSection}>
					<Text style={styles.pickerText}>Shift</Text>
					<Picker
						style={styles.picker}
						selectedValue={shift}
						onValueChange={this._handleFieldChange('shift')}>
						{
							WEEK_DAYS.map(this._renderPickerItem)
						}
					</Picker>
				</CardSection>
			</Card>
		);
	}

	_renderPickerItem(day) {
		return <Picker.Item key={day} label={day} value={day} />
	}

	_handleFieldChange = (name) => (value) => {
		const { employeeFieldUpdate } = this.props;

		employeeFieldUpdate(name, value)
	}
}

const styles = StyleSheet.create({
	pickerSection: {
		flexWrap: 'wrap',
	},
	pickerText: {
		alignSelf: 'flex-start',
		fontSize: 18,
		paddingLeft: 10,
		flex: 1,
	},
	picker: {
		flexBasis: '100%',
		flexGrow: 1,
		flexShrink: 0,
	}
});

const mapStateToProps = ({ employeeForm: { name, phone, shift } }: STATE) => ({
	name,
	phone,
	shift
});

export default connect(mapStateToProps, { employeeFieldUpdate })(EmployeeForm);
