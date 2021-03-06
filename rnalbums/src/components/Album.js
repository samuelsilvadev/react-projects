/**
 * @format
 * @flow
 */

import * as React from 'react';
import { Image, Linking, StyleSheet, Text, View } from 'react-native';

import Card from './card/Card';
import CardSection from './card/CardSection';
import Button from './Button';

type Props = {
    title: string,
    artist: string,
    thumbnail_image: string,
    image: string,
    url: string,
};

function Album(props: Props) {
    const { title, artist, thumbnail_image, image, url } = props;
    
    return (
        <Card>
            <CardSection>
                <View style={ styles.thumbnailWrapper }>
                    <Image style={ styles.thumbnailImage } source={ { url: thumbnail_image } } />
                </View>
                <View style={ styles.textContainer }>
                    <Text style={ styles.title }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            <CardSection>
                <Image style={ styles.image } source={ { url: image } } />
            </CardSection>
            <CardSection>
                <Button text="Buy now" onPress={ () => Linking.openURL(url) }/>
            </CardSection>
        </Card>
    );
}

const styles = StyleSheet.create({
    thumbnailWrapper: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10,
    },
    thumbnailImage: {
        height: 50,
        width: 50,
    },
    textContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    title: {
        fontSize:18,
    },
    image: {
        height: 300,
        flex: 1,
        width: null,
    },
});

export default Album;