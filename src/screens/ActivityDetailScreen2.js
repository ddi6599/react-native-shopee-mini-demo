import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View } from 'react-native';
import HeaderScreen from '../components/header'

export default class ActivityDetailScreen2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      titleText: "Bird's Nest",
      bodyText: '活动Id.'
    };
  }

  render() {
    return (
      <View>
        <HeaderScreen
          options={{
          title: this.props.navigation.state.params.Id,
          }}
          navigation={this.props.navigation} />
        <View>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {this.state.titleText}{'\n'}{'\n'}
            </Text>
            <Text>{this.state.bodyText}:{this.props.navigation.state.params.Id || 'Bill'}</Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: '',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

// skip this line if using Create React Native App
AppRegistry.registerComponent('ActivityDetailScreen2', () => ActivityDetailScreen2);