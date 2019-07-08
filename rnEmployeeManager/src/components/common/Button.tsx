import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
	text: String;
	onPress?: any;
};

export function Button(props: Props) {
	const { text, onPress } = props;

	return (
		<TouchableOpacity onPress={onPress} style={styles.button}>
			<Text style={styles.text}>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignSelf: 'stretch',
		borderRadius: 5,
		borderWidth: 1,
		borderColor: '#7c4dff',
		marginLeft: 5,
		marginRight: 5,
		marginBottom: 20,
		flex: 1,
	},
	text: {
		alignSelf: 'center',
		justifyContent: 'center',
		color: '#000',
		fontSize: 16,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10

	}
});

export default Button;
