import * as React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from './common';

const EmployeeListItem = ({ employee, ...restProps }) => {
	const { name } = employee;

	const _handlePress = () => {
		Actions.employeeEdit({ employee });
	};

	return (
		<TouchableWithoutFeedback onPress={_handlePress}>
			<View>
				<CardSection {...restProps}>
					<Text style={styles.name}>{name}</Text>
				</CardSection>
			</View>
		</TouchableWithoutFeedback>
	);
};

const styles = StyleSheet.create({
	name: {
		fontSize: 18,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft: 15
	}
});

export default EmployeeListItem;
