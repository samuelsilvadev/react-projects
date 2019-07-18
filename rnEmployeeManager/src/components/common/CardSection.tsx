import * as React from 'react';
import { View, StyleSheet } from 'react-native';

type Props = {
	children: any;
	style?: object;
};

export function CardSection(props: Props) {
	return <View style={[styles.container, props.style]}>{props.children}</View>;
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		borderColor: '#ddd',
		borderBottomWidth: 1,
		padding: 5,
		justifyContent: 'flex-start',
		flexDirection: 'row',
		position: 'relative'
	}
});

export default CardSection;
