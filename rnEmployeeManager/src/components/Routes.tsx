import * as React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';
import EmployeeCreate from './EmployeeCreate';

export const Routes = () => (
	<Router>
		<Scene key="root" hideNavBar>
			<Scene key="auth">
				<Scene
					key="login"
					component={LoginForm}
					title="Please login"
					initial />
			</Scene>
			<Scene key="main">
				<Scene
					rightTitle="Add"
					onRight={ () => Actions.employeeCreate() }
					key="employeeList"
					component={EmployeeList}
					title="Employees"
					initial />
				<Scene
					key="employeeCreate"
					component={EmployeeCreate}
					title="Create Employee" />
			</Scene>
		</Scene>
	</Router>
);
