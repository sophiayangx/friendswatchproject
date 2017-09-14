/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

import OpenPage from './src/components/OpenPage';
// import GroupPage from './src/components/GroupPage';

export default class FriendwatchProject extends Component {
  render() {
    return (
      <OpenPage />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FriendwatchProject', () => FriendwatchProject);
