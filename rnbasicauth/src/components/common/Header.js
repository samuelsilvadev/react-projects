/**
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    title: string,
};

export function Header(props: Props) {
    const { title } = props;

    return (
        <View style={ styles.view }>
            <Text style={ styles.text }>{ title }</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
        backgroundColor: '#f8f8f8',
        elevation: 2,
        height: 70,
        justifyContent: 'center',
        paddingTop: 25,
        position: 'relative',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.2,
    },
    text: {
        fontSize: 20,
    }    
});