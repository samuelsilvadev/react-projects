/**
 * @format
 * @flow
 */

import * as React from 'react';
import { Text } from 'react-native';

import Card from './card/Card';
import CardSection from './card/CardSection';

type Props = {
    title: string,
};

function Album(props: Props) {
    const { title } = props;

    return (
        <Card>
            <CardSection>
                <Text>{ title }</Text>
            </CardSection>
        </Card>
    );
}

export default Album;