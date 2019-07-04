import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Header, Button, LibraryList } from './src/components';

import { store } from './src/state/store';

export default class App extends React.Component {
	state = {
		renderLibraries: false
	};

	render() {
		const { renderLibraries } = this.state;

		return (
			<Provider store={store}>
				<View style={styles.container}>
					<Header>
						<Text style={styles.headerText}>Header</Text>
					</Header>
					{!renderLibraries ? (
						<Fragment>
							<View style={styles.textContainer}>
								<Text style={styles.text}>StackTech</Text>
							</View>
							<Button
								onPress={this._onHandlePressShowLibraries}
								text="Show Libraries list"
							/>
						</Fragment>
					) : (
						<View style={styles.listContainer}>
							<LibraryList />
						</View>
					)}
				</View>
			</Provider>
		);
	}

	_onHandlePressShowLibraries = () => {
		this.setState({
			renderLibraries: true
		});
	};
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#FF6D00',
		alignItems: 'center',
		justifyContent: 'flex-start'
	},
	textContainer: {
		flex: 1,
		justifyContent: 'center'
	},
	listContainer: {
		flex: 1,
		alignSelf: 'stretch'
	},
	text: {
		color: '#fff',
		fontSize: 24
	},
	headerText: {
		color: '#fff'
	}
});
