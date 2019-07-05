import * as React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { connect } from 'react-redux';

import { selectLibrary } from '../state/actions';

import { CardSection } from './CardSection';

import { Library } from './Types';

type Props = {
	library: Library;
	selectedLibrary: Number;
	selectLibrary: Function;
};

export class ListItem extends React.Component<Props> {
	render() {
		const { library } = this.props;

		return (
			<TouchableWithoutFeedback onPress={this._handleOnPress}>
				<View>
					<CardSection>
						<Text style={styles.title}>{library.title}</Text>
					</CardSection>
				</View>
			</TouchableWithoutFeedback>
		);
	}

	_handleOnPress = () => {
		const {
			library: { id },
			selectLibrary
		} = this.props;

		selectLibrary(id);
	};
}

const styles = StyleSheet.create({
	title: {
		color: '#000',
		fontSize: 18,
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15
	}
});

const mapStateToProps = ({ selectedLibraryId }) => ({
	selectedLibraryId
});

const mapDispatchToProps = {
	selectLibrary
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItem);
