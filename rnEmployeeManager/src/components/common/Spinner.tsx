import * as React from 'react';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

type Props = {
	size: String;
};

export function Spinner(props: Props) {
	return (
		<View style={styles.spinner}>
			<ActivityIndicator size={props.size || 'large'} />
		</View>
	);
}

const styles = StyleSheet.create({
	spinner: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
		paddingBottom: 10
	}
});

export default Spinner;
