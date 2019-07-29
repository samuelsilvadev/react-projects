import * as React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';

import Button from './Button';
import CardSection from './CardSection';

type Props = {
	isVisible?: boolean;
	children: any;
	onAccept?: Function;
	onDecline?: Function;
};

const noop = () => {};

export function Confirm(props: Props) {
	const { children, onAccept, onDecline, isVisible } = props;

	return (
		<Modal visible={isVisible} transparent animationType="slide" onRequestClose={noop}>
			<View style={styles.wrapper}>
				<CardSection style={styles.cardSection}>
					<Text style={styles.text}>{children}</Text>
				</CardSection>
				<CardSection style={styles.cardSection}>
					<Button text="Yes" onPress={onAccept} />
					<Button text="No" onPress={onDecline} />
				</CardSection>
			</View>
		</Modal>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: 'rgba(0,0,0,0.75)',
		position: 'relative',
		flex: 1,
		justifyContent: 'center'
	},
	cardSection: {
		justifyContent: 'center'
	},
	text: {
		flex: 1,
		fontSize: 18,
		textAlign: 'center',
		lineHeight: 40
	}
});

export default Confirm;
