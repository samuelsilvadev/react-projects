/**
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';

type Props = {
    children: any,
}

export function Card(props: Props) {
    const { children } = props;

    return (
        <View style={ styles.container }>
            { children }
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        borderRadius: 2,
        borderColor: '#ddd',
        borderBottomWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    },
});