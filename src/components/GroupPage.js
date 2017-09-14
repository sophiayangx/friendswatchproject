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

        <TouchableOpacity style={styles.createBlock}>
          <View style={styles.plusContainer}>
            <Image
              style={styles.plus}
              source={require('../images/plus-sign.png')}
            />
          </View>

          <Text style={styles.createText}>
            CREATE NEW GROUP
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.joinBlock}>
          <Text style={styles.joinText}>
            JOIN GROUP
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
    paddingTop: 10,
    color: '#16aa88',
  },
  createBlock: {
    marginTop: -10,
    width: 375,
    height: 285,
    backgroundColor: '#16aa88',
  },
  plus: {
    height: 110,
    width: 110,
  },
  plusContainer:{
    alignItems: 'center',
    marginTop: 30,
  },
  createText: {
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },
  joinBlock: {
    width: 375,
    height: 285,
    borderColor: '#16aa88',
    borderWidth: 5,
  },
  joinText: {
    fontSize: 40,
    textAlign: 'center',
    color: '#16aa88',
    paddingTop: 100,
  },
});

AppRegistry.registerComponent('FriendwatchProject', () => FriendwatchProject);
