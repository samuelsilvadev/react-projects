import * as React from 'react';
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';

import { employeesFetch, STATE } from './../state';

import EmployeeListItem from './EmployeeListItem';
import { Spinner } from './common';

interface EmployeeListProps {
	employees: Array<Object>;
	employeesFetch: Function;
};

class EmployeeList extends React.Component<EmployeeListProps> {
	componentDidMount() {
		this.props.employeesFetch()
	}

	render() {
		const { employees } = this.props;

		if (employees.length <= 0) {
			return (
				<View style={styles.spinnerWrapper}>
					<Spinner size="large" />
				</View>
			);
		}

		return (
			<View>
				<FlatList
					data={employees}
					renderItem={this._renderItem}
					keyExtractor={(_, index) => index.toString()}/>
			</View>
		);
	}

	_renderItem = ({ item }) => {
        return <EmployeeListItem employee={item} />
	}
}

const styles = StyleSheet.create({
	spinnerWrapper: {
		flex: 1,
		justifyContent: 'center',
	}
});

const mapStateToProps = ({ employees }: STATE) => ({
	employees: Object.keys(employees).map(key => ({ uid: key, ...employees[key] }))
});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
