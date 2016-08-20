/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
  View
} from 'react-native';
import Nav from './global-widgets/nav'
import SwipeCards from 'react-native-swipe-cards';
const Cards = [
  {text: 'Tomato', backgroundColor: 'red'},
  {text: 'Aubergine', backgroundColor: 'purple'},
  {text: 'Courgette', backgroundColor: 'green'},
  {text: 'Blueberry', backgroundColor: 'blue'},
  {text: 'Umm...', backgroundColor: 'cyan'},
  {text: 'orange', backgroundColor: 'orange'},
]

export default class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      cards: Cards
    }
  }
  Card(x){
    return (
      <View style={[styles.card, {backgroundColor: x.backgroundColor}]}>
        <Text>{x.text}</Text>
      </View>
    )
  }
    handleYup (card) {
    console.log(`Yup for ${card.text}`)
  }

  handleNope (card) {
    console.log(`Nope for ${card.text}`)
  }
  noMore(){
    return (
      <View style={styles.card} >
        <Text>No More Cards</Text>
      </View>
    )
  }
  render() {
    return (
      <View style={styles.container}>
      <Nav />
      <SwipeCards
        cards={this.state.cards}
        containerStyle = {{  backgroundColor: '#f7f7f7', alignItems:'center', margin:20}}
        renderCard={(cardData) => this.Card(cardData)}
        renderNoMoreCards={() => this.noMore()}

        handleYup={this.handleYup}
        handleNope={this.handleNope} />
        </View>
    )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#f7f7f7',
  },
   card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 300,
  }
 
});
