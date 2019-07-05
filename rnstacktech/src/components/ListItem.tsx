import * as React from 'react';
import { Text, StyleSheet, TouchableWithoutFeedback, View, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';

import { selectLibrary } from '../state/actions';

import { CardSection } from './CardSection';

import { Library } from './Types';

type Props = {
	library: Library;
	expanded: Boolean;
	selectLibrary: Function;
};

export class ListItem extends React.Component<Props> {
	componentWillUpdate() {
		LayoutAnimation.spring();
	}

	render() {
		const { library, expanded } = this.props;

		return (
			<TouchableWithoutFeedback onPress={this._handleOnPress}>
				<View>
					<CardSection>
						<Text style={styles.title}>{library.title}</Text>
					</CardSection>
					{expanded && <Text style={styles.description}>{library.description}</Text>}
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
	},
	description: {
		paddingTop: 15,
		paddingBottom: 15,
		paddingLeft: 15,
		paddingRight: 15
	}
});

const mapStateToProps = ({ selectedLibraryId }, ownProps: Props) => ({
	expanded: selectedLibraryId === ownProps.library.id,
	selectedLibraryId
});

const mapDispatchToProps = {
	selectLibrary
};

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ListItem);
