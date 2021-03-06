/**
 * @format
 * @flow
 */

import * as React from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

import Album from './Album';

type Props = {};
type State = {
    albums: Array<{
        title: string,
        artist: string,
        thumbnail_image: string,
        image: string,
        url: string,
    }>,
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
        const { albums } = this.state;

        return (
            <ScrollView>
                { albums.map(this._renderAlbum, this) }
            </ScrollView>
        );
    }

    _renderAlbum(albumData) {
        return <Album key={ albumData.title } { ...albumData } />
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
