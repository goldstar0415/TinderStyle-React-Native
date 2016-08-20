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

export default class Nav extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Icon name="menu" color ="#333" size={20} style={{margin:10}} />
      <Image source ={require('../../images/logo.png')} resizeMode = "contain" style={{width:100, height:30}} />
      <Icon name="forum" color ="#555" size={25} style={{margin:10}} />
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
