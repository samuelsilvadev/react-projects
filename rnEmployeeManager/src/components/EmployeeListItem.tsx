import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardSection } from './common'

const EmployeeListItem = ({ employee, ...restProps }) => {
	const { name } = employee;

	return (
		<CardSection {...restProps}>
			<Text style={styles.name}>{name}</Text>
		</CardSection>
	);
}

const styles = StyleSheet.create({
	name: {
		fontSize: 18,
		paddingTop: 10,
		paddingBottom: 10,
		paddingLeft:  15
	}
});

export default EmployeeListItem;
