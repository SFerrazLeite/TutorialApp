import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import BottomNavigation, { Tab } from 'react-native-material-bottom-navigation'
import Icon from 'react-native-vector-icons/Ionicons';


export default class MyBottomNavigation extends Component {
  render() {
    return (
        <BottomNavigation
          labelColor="white"
          rippleColor="#37474F"
          style={styles.bottomNavigation}
        >
          <Tab
            barBackgroundColor="#37474F"
            label="Home"
            icon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-home-outline" />}
            activeIcon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-home" />}
          />
          <Tab
            barBackgroundColor="#37474F"
            label="Ask"
            icon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-bulb-outline" />}
            activeIcon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-bulb" />}
          />
          <Tab
            barBackgroundColor="#37474F"
            label="Profile"
            icon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-person-outline" />}
            activeIcon={<Icon style={{textAlign: 'center'}} size={24} color="white" name="ios-person" />}
          />
        </BottomNavigation>
    )
  }
}

const styles = StyleSheet.create({
  bottomNavigation: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    height: 56,
  }
})
