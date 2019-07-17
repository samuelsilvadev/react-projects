import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/state/store';
import { initFirebaseHOC } from './src/firebase/initFirebaseHOC';

import { Routes } from './src/components/Routes';

export default initFirebaseHOC(function App() {
	return (
		<Provider store={store}>
			<Routes />
		</Provider>
	);
});

// TODO:  Check if this is still necessary.
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
