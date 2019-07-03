import * as React from 'react';
import { View, Text } from 'react-native'
import { connect } from 'react-redux';

type Library = {
    id: Number,
    title: String,
    description: String,
};

type Props = {
    libraries: Array<Library>,
};

export function LibraryList(props: Props) {
    
    return (
        <View>
            <Text>Libraries</Text>
        </View>
    );
}

function mapStateToProps(state) {
    return {
        libraries: state.libraries,
    }
}

export default connect(mapStateToProps)(LibraryList);



