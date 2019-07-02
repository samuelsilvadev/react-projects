import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';

import { Header } from './src/components';

import { store } from './src/state/store'

export default function App() {
  return (
    <Provider store={ store }>
      <View style={styles.container}>
        <Header>
          <Text>Header</Text>
        </Header>
        <View style={styles.textContainer}>
          <Text style={styles.text}>StackTech</Text>
        </View>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF6D00',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 24,
  }
});
