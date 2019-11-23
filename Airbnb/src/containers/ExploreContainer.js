import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class ExploreContainer extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <Text>
Explore Container
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 50,
  },
});