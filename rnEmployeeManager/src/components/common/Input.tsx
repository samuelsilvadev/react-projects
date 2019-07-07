import * as React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

type Props = {
	label: string;
	placeholder: string;
	value: any;
	onChangeText: Function;
};

export function Input(props: Props) {
	const { label, placeholder, value, onChangeText, ...restProps } = props;

	return (
		<View style={styles.container}>
			<Text style={styles.label}>{label}</Text>
			<TextInput
				autoCorrect={false}
				style={styles.textInput}
				value={value}
				onChangeText={onChangeText}
				placeholder={placeholder}
				{...restProps}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		height: 40,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center'
	},
	label: {
		paddingLeft: 10,
		fontSize: 18,
		flex: 1
	},
	textInput: {
		color: '#000',
		paddingRight: 5,
		paddingLeft: 5,
		fontSize: 18,
		lineHeight: 23,
		flex: 2
	}
});

export default Input;
