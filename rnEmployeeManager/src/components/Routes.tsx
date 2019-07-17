import * as React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import LoginForm from './LoginForm';
import EmployeeList from './EmployeeList';

export const Routes = () => (
	<Router>
		<Scene key="root" hideNavBar>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Please login" initial />
			</Scene>
			<Scene key="main">
				<Scene
					rightTitle="Add"
					onRight={ () => console.log('clicked on right side') }
					key="employeeList"
					component={EmployeeList}
					title="Employees" />
			</Scene>
		</Scene>
	</Router>
);
