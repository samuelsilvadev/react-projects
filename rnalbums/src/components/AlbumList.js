/**
 * @format
 * @flow
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

type Props = {};
type State = {
    albums: Array<{}>,
    error: ?Object,
};

const ALBUMS_ENDPOINT = 'https://rallycoding.herokuapp.com/api/music_albums';

class AlbumList extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            albums: [],
            error: undefined,
        };

        (this: any)._handleSuccessAlbumsLoad = this._handleSuccessAlbumsLoad.bind(this);
        (this: any)._handleErrorAlbumsLoad = this._handleErrorAlbumsLoad.bind(this);
    }

    componentDidMount() {
        axios.get(ALBUMS_ENDPOINT)
            .then(this._handleSuccessAlbumsLoad)
            .catch(this._handleErrorAlbumsLoad);
    }

    render() {
        return (
            <View>
                <Text>AlbumList</Text>
            </View>
        );
    }

    _handleSuccessAlbumsLoad(response) {
        if (response && response.data) {
            this.setState({ albums: response.data })
        }
    }

    _handleErrorAlbumsLoad(error) {
        if (error) {
            this.setState({ error });
        }
    }
}

export default AlbumList;
