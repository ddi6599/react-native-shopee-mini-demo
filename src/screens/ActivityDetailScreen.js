import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet, View, Button } from 'react-native';
import Header from '../components/Header'

export default class ActivityDetailScreen extends Component {
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
        <Header
          title={this.props.navigation.state.params.Id}
          navigation={this.props.navigation}
        />
        <View>
          <Text style={styles.baseText}>
            <Text style={styles.titleText}>
              {this.state.titleText}{'\n'}{'\n'}
            </Text>
            <Text>{this.state.bodyText}:{this.props.navigation.state.params.Id || 'Bill'}</Text>
          </Text>
          <Button
            title="圣诞活动通知02"
            onPress={() => this.props.navigation.navigate('Activity2', { Id: 'christmas_02' })}
          />
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
})
