/**
 *
 * @format
 * @flow
 */

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';

import { Header, Button, CardSection, Card, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

type Props = {};

type State = {
  isLoggedIn: boolean | null,
};

class App extends React.Component<Props, State> {
  constructor() {
    super();

    this.state = {
      isLoggedIn: null,
    };

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

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ isLoggedIn: Boolean(user) });
    });
  }

  render() {
    return (
      <View style={ styles.container }>
        <Header title="Auth App" />
        { this._renderContent() }
      </View>
    );
  }

  _renderContent() {
    const { isLoggedIn } = this.state;

    switch (isLoggedIn) {
      case null:
        return <Spinner />
      case true:
        return (
          <Card>
            <CardSection>
              <Button text="Log Out" />
            </CardSection>
          </Card>
        );
      case false:
        return <LoginForm />;
      default:
          return null;
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;