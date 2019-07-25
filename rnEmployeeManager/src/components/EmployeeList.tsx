import * as React from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { employeesFetch, STATE } from './../state';

interface EmployeeListProps {
	employees: Array<Object>;
	employeesFetch: Function;
};

class EmployeeList extends React.Component<EmployeeListProps> {
	componentDidMount() {
		this.props.employeesFetch()
	}

	render() {
		return (
			<View>
				<Text>List Item</Text>
			</View>
		);
	}
}

const mapStateToProps = ({ employees }: STATE) => ({
	employees: Object.keys(employees).map(key => ({ uid: key, ...employees[key] }))
});

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
