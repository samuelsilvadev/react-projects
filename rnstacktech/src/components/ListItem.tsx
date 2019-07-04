import * as React from 'react';
import { Text, StyleSheet } from 'react-native';

import { CardSection } from './CardSection';

import { Library } from './Types';

type Props = {
	library: Library;
};

export function ListItem(props: Props) {
	const { library } = props;

	return (
		<CardSection>
			<Text style={styles.title}>{library.title}</Text>
		</CardSection>
	);
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

export default ListItem;
