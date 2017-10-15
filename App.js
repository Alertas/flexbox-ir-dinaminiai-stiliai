/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View, 
  Button,
  TextInput
} from 'react-native';




export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
              <View style={styles.flexbox1}>
              <Button
                style={styles.buttonStyle}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                style={styles.buttonStyle}
                title="Learn More"
                color="red"
                accessibilityLabel="Learn more about this purple button"
              />
              <Button
                style={styles.buttonStyle}
                title="Learn More"
                color="green"
                accessibilityLabel="Learn more about this purple button"
              />
              </View>
              <View style={styles.flexbox2}>
                <TextInput placeholder="Text1" placeholderTextColor="red"/>
                <TextInput placeholder="Text2" placeholderTextColor="yellow"/>
                <TextInput placeholder="Text3" placeholderTextColor="brown"/>
              </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  flexbox1: {
    flex: 1,
    justifyContent: 'space-between',
    margin: 20
    },
  flexbox2: {
    flex:1,
    backgroundColor: '#666666',
    justifyContent: 'space-around'
    }
  
  
});
