import * as React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';

export const Routes = () => (
	<Router>
		<Scene key="root">
			<Scene key="login" component={LoginForm} title="Please login" initial />
			<Scene key="employeeList" component={EmployeeList} title="Employees" />
		</Scene>
	</Router>
);
