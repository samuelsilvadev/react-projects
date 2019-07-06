import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

import { store } from './src/state/store';
import { initFirebaseHOC } from './src/firebase/initFirebaseHOC';

export default initFirebaseHOC(function App() {
	return (
		<Provider store={store}>
			<View style={styles.container}>
				<Text style={styles.text}>Added Provider</Text>
			</View>
		</Provider>
	);
});

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#7c4dff',
		alignItems: 'center',
		justifyContent: 'center'
	},
	text: {
		color: '#fff'
	}
});
