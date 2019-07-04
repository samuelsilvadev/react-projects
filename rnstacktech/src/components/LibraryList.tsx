import * as React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { ListItem } from './ListItem';

import { Library } from './Types';

type Props = {
	libraries: Array<Library>;
};

function _renderItem(library) {
	return <ListItem library={library.item} />;
}

function _getKey(library) {
	return String(library.id);
}

export function LibraryList(props: Props) {
	return (
		<FlatList
			contentContainerStyle={styles.container}
			data={props.libraries}
			renderItem={_renderItem}
			keyExtractor={_getKey}
		/>
	);
}

const styles = StyleSheet.create({
	container: {}
});

function mapStateToProps(state) {
	return {
		libraries: state.libraries
	};
}

export default connect(mapStateToProps)(LibraryList);
