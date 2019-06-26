/**
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { View } from 'react-native';
import firebase from 'firebase';

import { Header } from './components/common';
import LoginForm from './components/LoginForm';

type Props = {};

class App extends React.Component<Props> {
  constructor() {
    super();

    firebase.initializeApp({
      apiKey: 'AIzaSyDVNeETygFhLf5djG41XbcGzaal_d-RzKo',
      authDomain: 'react-native-auth-a8fcd.firebaseapp.com',
      databaseURL: 'https://react-native-auth-a8fcd.firebaseio.com',
      projectId: 'react-native-auth-a8fcd',
      storageBucket: '',
      messagingSenderId: '154305943011',
      appId: '1:154305943011:web:113acfbbf3b5731',
    });
  }

  render() {
    return (
      <View>
        <Header title="Auth App" />
        <LoginForm />
      </View>
    );
  }
}

export default App;