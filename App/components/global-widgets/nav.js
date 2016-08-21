/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Image,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconz from 'react-native-vector-icons/Ionicons';

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Iconz name="ios-settings" color ="#888" size={20} style={{margin:10}} />
      <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />
      <Iconz name="ios-chatboxes-outline" color ="#555" size={25} style={{margin:10}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height:60,
    flexDirection:'row',
    paddingTop:10,
    justifyContent: 'space-between',
    alignItems:'center',
    backgroundColor: '#fff',
    borderBottomWidth:1,
    borderColor:'rgba(0,0,0,0.1)'
  },
});
