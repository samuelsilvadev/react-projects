/**
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    children: any
}

export function CardSection(props: Props) {
    const { children } = props;

    return (
        <View style={ styles.container }>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        position: 'relative',
    },
});