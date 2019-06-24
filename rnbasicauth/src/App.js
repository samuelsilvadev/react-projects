/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';

import { Header } from './components/common';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <View>
        <Header title="Auth App" />
      </View>
    );
  }
}

export default App;