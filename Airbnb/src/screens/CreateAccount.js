import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ToastAndroid
} from "react-native";
//import firebase from 'react-native-firebase'
export default class CreateAccount extends Component {
  state = {email: '', password: '', errorMessage: null};

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
