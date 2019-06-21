import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type Props = {
    text: String,
    onPress: Function,
};

function Button(props: Props) {
    const { text, onPress } = props;

    return (
        <TouchableOpacity onPress={ onPress } style={ styles.button }>
            <Text style={ styles.text }>
                { text }
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flex: 1,
        alignSelf: 'stretch',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10,
    },
});

export default Button;