import React, { Component } from 'react';
import { View, Text } from 'react-native';
import BottomNavigation from './BottomNavigation.js'

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Hello world!</Text>
        <BottomNavigation></BottomNavigation>
      </View>
    );
  }
}
