import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/state/store';
import { initFirebaseHOC } from './src/firebase/initFirebaseHOC';

import LoginForm from './src/components/LoginForm';

export default initFirebaseHOC(function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<LoginForm />
			</View>
		</Provider>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7c4dff',
		alignItems: 'stretch',
		justifyContent: 'center'
	},
	text: {
		color: '#fff'
	}
});
