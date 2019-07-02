import * as React from 'react';
import { View, StyleSheet } from 'react-native'

type Props = {
    children: any,
};

export function Header(props: Props) {
    const { children } = props;

    return (
        <View style={styles.container}>
            { children }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'stretch',
        alignItems: 'center',
        borderColor: '#000',
        borderBottomWidth: 1,
    },
});

export default Header;