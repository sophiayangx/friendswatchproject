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

export default class FriendwatchProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          FRIENDWATCH
        </Text>

        <TouchableOpacity>
          <Text style={styles.button}>
            WATCH
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.button}>
            FRIENDS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.button}>
            SETTINGS
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    borderWidth: 5,
    borderColor: '#16aa88',
    width: 375,
    justifyContent: 'center',
    marginTop: 30,
    marginBottom: 30,
    paddingTop: 10,
    color: '#16aa88',
  },
  button: {
    fontSize: 40,
    // justifyContent: 'center',
    paddingTop: 50,
    textAlign: 'center',
    color: 'white',
    width: 370,
    height: 150,
    backgroundColor: '#16aa88',
    marginBottom: 30,
  },
});

AppRegistry.registerComponent('FriendwatchProject', () => FriendwatchProject);
